import { Request, Response } from "express";

import BooksModel from "../models/books.model";
import { BasicController } from "./basic.controller";

class BookController extends BasicController {
  async getBooks(req: Request, res: Response) {
    try {
      const page = req.page;
      const limit = req.limit;
      const books = await BooksModel.find().skip(page).limit(limit);
      return this.successResponse(res, books);
    } catch (error) {
      return this.errorResponse(res, error);
    }
  }
  async getBook(req: Request, res: Response) {
    try {
      const book = await BooksModel.findById(req.params.id);
      return this.successResponse(res, book);
    } catch (error: any) {
      return this.errorResponse(res, { message: 'Book does not exist'});
    }
  }

  async createBook(req: Request, res: Response) {
    try {
      const book = new BooksModel(req.body);
      await book.save();
      return this.successResponse(res, book)
    } catch (error) {
      return this.errorResponse(res, error)
    }
  }

  async updateBook(req: Request, res: Response) {
    try {
      const book = await BooksModel.findById(req.params.id);
      const model = new BooksModel(book);
      model.set(req.body);
      model.save();
      return this.successResponse(res, model);
    } catch (error) {
      return this.errorResponse(res, error)
    }
  }

  async deleteBook(req: Request, res: Response) {
    try {
      await BooksModel.findById(req.params.id).deleteOne();
      return this.successResponse(res, { message: "Book was deleted" })
    } catch (error) {
      return this.errorResponse(res, {message: "Book does not exist"})
    }
  }
}

export default new BookController();
