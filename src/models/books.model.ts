import { Schema, model } from "mongoose";
import moment from "moment";


const bookSchema = new Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    piblishDate: { type: Date, default: moment()},
    pageCount: { type: String, require: false },
  },
  { versionKey: false, timestamps: true },

);

export default model('books', bookSchema)