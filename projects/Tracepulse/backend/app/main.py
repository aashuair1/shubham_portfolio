from fastapi import FastAPI
from app.routers import auth

app = FastAPI(title="Tracepulse API", description="Platform to keep Track of API", version="1.0.0")

@app.get("/health")
def health_check():
    return {"status": "ok"}

app.include_router(auth.router, prefix="/auth", tags=["user_Authentication"])

