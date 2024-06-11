from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi_jwt_auth import AuthJWT
from typing import List
from .. import models, schemas, database

router = APIRouter(prefix="/quotes", tags=["quotes"])

@router.post("/", response_model=schemas.Quote)
def create_quote(quote: schemas.QuoteCreate, db: Session = Depends(database.get_db), Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    product = db.query(models.Product).filter(models.Product.id == quote.product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    total_price = product.price * quote.quantity
    new_quote = models.Quote(product_id=quote.product_id, quantity=quote.quantity, total_price=total_price)
    db.add(new_quote)
    db.commit()
    db.refresh(new_quote)

    for subproduct in quote.subproducts:
        new_quote_subproduct = models.QuoteSubProduct(quote_id=new_quote.id, subproduct_id=subproduct['subproduct_id'], quantity=subproduct['quantity'])
        db.add(new_quote_subproduct)
        db.commit()

    return new_quote
