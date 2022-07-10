import { Request, Response, NextFunction } from "express";

const pagination = (req: Request, res: Response, next: NextFunction) => {
  const page: number = parseInt(req.query.page as string) || 0;
  const limit: number = parseInt(req.query.limit as string) || 0;
  req.page = page;
  req.limit = limit;
  next();
};

export default pagination;
