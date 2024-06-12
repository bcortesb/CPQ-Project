from sqlalchemy.orm import Session
from . import models, schemas

def get_user_by_username(db: Session, username: str):
    return db.query(models.User).filter(models.User.username == username).first()

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = bcrypt.hash(user.password)
    db_user = models.User(username=user.username, password_hash=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_products(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Product).offset(skip).limit(limit).all()

def create_product(db: Session, product: schemas.ProductCreate):
    db_product = models.Product(name=product.name, price=product.price, description=product.description)
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product

def get_subproducts(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.SubProduct).offset(skip).limit(limit).all()

def create_subproduct(db: Session, subproduct: schemas.SubProductCreate):
    db_subproduct = models.SubProduct(name=subproduct.name, description=subproduct.description, price=subproduct.price, image_url=subproduct.image_url, product_id=subproduct.product_id)
    db.add(db_subproduct)
    db.commit()
    db.refresh(db_subproduct)
    return db_subproduct

def get_quotes(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Quote).offset(skip).limit(limit).all()

def create_quote(db: Session, quote: schemas.QuoteCreate):
    db_quote = models.Quote(product_id=quote.product_id, quantity=quote.quantity, total_price=quote.total_price)
    db.add(db_quote)
    db.commit()
    db.refresh(db_quote)
    return db_quote
