import express from "express";

declare global {
  namespace Express {
    interface Request {
      page?: Record<number>;
      limit?: Record<number>;
    }
  }
}
