from fastapi import FastAPI
from .routes import auth, products, quotes
from .database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth.router)
app.include_router(products.router)
app.include_router(quotes.router)
