from sqlalchemy import Column, Integer, String, Float, ForeignKey, Boolean, Text
from sqlalchemy.orm import relationship
from .database import Base
from passlib.hash import bcrypt

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    password_hash = Column(String)
    is_admin = Column(Boolean, default=False)

    def verify_password(self, password: str) -> bool:
        return bcrypt.verify(password, self.password_hash)

class Product(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    price = Column(Float)
    description = Column(String, index=True)
    subproducts = relationship("SubProduct", back_populates="product")

class SubProduct(Base):
    __tablename__ = "subproducts"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(Text)
    price = Column(Float)
    image_url = Column(String)
    product_id = Column(Integer, ForeignKey('products.id'))
    product = relationship("Product", back_populates="subproducts")

class Quote(Base):
    __tablename__ = "quotes"
    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey('products.id'))
    quantity = Column(Integer)
    total_price = Column(Float)

    product = relationship("Product")

class QuoteSubProduct(Base):
    __tablename__ = "quote_subproducts"
    id = Column(Integer, primary_key=True, index=True)
    quote_id = Column(Integer, ForeignKey('quotes.id'))
    subproduct_id = Column(Integer, ForeignKey('subproducts.id'))
    quantity = Column(Integer)

    subproduct = relationship("SubProduct")
