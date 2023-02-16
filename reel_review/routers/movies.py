from fastapi import APIRouter, Depends
from pydantic import BaseModel


class MovieIn(BaseModel):
    
