from pydantic import BaseModel

class UserBase(BaseModel):
    username: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    is_admin: bool

    class Config:
        orm_mode = True

class ProductBase(BaseModel):
    name: str
    price: float
    description: str

class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    id: int

    class Config:
        orm_mode = True

class SubProductBase(BaseModel):
    name: str
    description: str
    price: float
    image_url: str

class SubProductCreate(SubProductBase):
    product_id: int

class SubProduct(SubProductBase):
    id: int

    class Config:
        orm_mode = True

class QuoteBase(BaseModel):
    product_id: int
    quantity: int
    total_price: float

class QuoteCreate(QuoteBase):
    pass

class Quote(QuoteBase):
    id: int

    class Config:
        orm_mode = True
