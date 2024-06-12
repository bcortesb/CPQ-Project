from fastapi import FastAPI
from app.routes import auth, products, quotes
from app.database import Base, engine

app = FastAPI()

Base.metadata.create_all(bind=engine)

@app.get("/")
def read_root():
    return {"message": "Welcome to the CPQ Project API"}

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(products.router, prefix="/products", tags=["products"])
app.include_router(quotes.router, prefix="/quotes", tags=["quotes"])
