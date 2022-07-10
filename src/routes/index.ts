import express from "express";

import books from "./books.router";

const router = express.Router();

router.use("/books", books);

export default router;
