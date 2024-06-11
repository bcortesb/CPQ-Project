from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi_jwt_auth import AuthJWT
from .. import models, schemas, database

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/register", response_model=schemas.User)
def register(user: schemas.UserCreate, db: Session = Depends(database.get_db)):
    db_user = db.query(models.User).filter(models.User.username == user.username).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Username already registered")
    hashed_password = bcrypt.hash(user.password)
    db_user = models.User(username=user.username, password_hash=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@router.post("/login")
def login(user: schemas.UserCreate, db: Session = Depends(database.get_db), Authorize: AuthJWT = Depends()):
    db_user = db.query(models.User).filter(models.User.username == user.username).first()
    if not db_user or not db_user.verify_password(user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    access_token = Authorize.create_access_token(subject=db_user.id)
    return {"access_token": access_token}
