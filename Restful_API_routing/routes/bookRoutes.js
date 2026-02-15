const express = require("express");
const router = express.Router();
const validateYear = require("../middleware/validateYear");
const bookController = require("../controllers/bookController");

router.get("/", bookController.getAllBooks);
router.get("/search", bookController.searchBooks);
router.get("/:id", bookController.getBookById);

router.post("/", validateYear, bookController.createBook);
router.put("/:id", validateYear, bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;