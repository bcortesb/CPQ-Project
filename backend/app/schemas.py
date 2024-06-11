from pydantic import BaseModel
from typing import List

class UserCreate(BaseModel):
    username: str
    password: str

class User(BaseModel):
    id: int
    username: str
    is_admin: bool

    class Config:
        orm_mode = True

class SubProductBase(BaseModel):
    name: str
    description: str
    price: float
    image_url: str

class SubProductCreate(SubProductBase):
    pass

class SubProduct(SubProductBase):
    id: int

    class Config:
        orm_mode = True

class ProductBase(BaseModel):
    name: str
    price: float
    description: str

class ProductCreate(ProductBase):
    subproducts: List[SubProductCreate] = []

class Product(ProductBase):
    id: int
    subproducts: List[SubProduct] = []

    class Config:
        orm_mode = True

class QuoteBase(BaseModel):
    product_id: int
    quantity: int

class QuoteCreate(QuoteBase):
    subproducts: List[dict] = []

class Quote(QuoteBase):
    id: int
    total_price: float

    class Config:
        orm_mode = True
