import { body } from "express-validator";

export const blogPostValidation = [
  body("author").exists().withMessage("Author is a mandatory field!"),
  body("category").exists().withMessage("Category is a mandatory field!"),
  body("title").exists().withMessage("Title is a mandatory field!"),
  body("content").exists().withMessage("Content is a mandatory field!"),
];