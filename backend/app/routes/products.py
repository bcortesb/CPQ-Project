from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi_jwt_auth import AuthJWT
from typing import List
from .. import models, schemas, database

router = APIRouter(prefix="/products", tags=["products"])

@router.get("/", response_model=List[schemas.Product])
def get_products(db: Session = Depends(database.get_db)):
    products = db.query(models.Product).all()
    return products

@router.post("/", response_model=schemas.Product)
def add_product(product: schemas.ProductCreate, db: Session = Depends(database.get_db), Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    new_product = models.Product(name=product.name, price=product.price, description=product.description)
    db.add(new_product)
    db.commit()
    db.refresh(new_product)

    for subproduct_data in product.subproducts:
        new_subproduct = models.SubProduct(**subproduct_data.dict(), product_id=new_product.id)
        db.add(new_subproduct)
        db.commit()

    return new_product

@router.put("/{product_id}", response_model=schemas.Product)
def update_product(product_id: int, product: schemas.ProductCreate, db: Session = Depends(database.get_db), Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    db_product = db.query(models.Product).filter(models.Product.id == product_id).first()
    if not db_product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    db_product.name = product.name
    db_product.price = product.price
    db_product.description = product.description
    db.commit()

    db.query(models.SubProduct).filter(models.SubProduct.product_id == product_id).delete()
    for subproduct_data in product.subproducts:
        new_subproduct = models.SubProduct(**subproduct_data.dict(), product_id=db_product.id)
        db.add(new_subproduct)
    db.commit()
    
    return db_product

@router.delete("/{product_id}")
def delete_product(product_id: int, db: Session = Depends(database.get_db), Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    db_product = db.query(models.Product).filter(models.Product.id == product_id).first()
    if not db_product:
        raise HTTPException(status_code=404, detail="Product not found")
    db.delete(db_product)
    db.commit()
    return {"message": "Product deleted"}
