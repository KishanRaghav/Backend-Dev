const { books } = require("../data/db");

exports.getAllBooks = (req, res) => {
  let result = [...books];
  const { author, year, page = 1, limit = 10 } = req.query;

  if (author) {
    result = result.filter(b =>
      b.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  if (year) {
    result = result.filter(b => b.year == year);
  }

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginated = result.slice(startIndex, endIndex);

  res.json({
    total: result.length,
    page: Number(page),
    limit: Number(limit),
    data: paginated
  });
};

exports.searchBooks = (req, res) => {
  const { title } = req.query;

  const result = books.filter(b =>
    b.title.toLowerCase().includes(title.toLowerCase())
  );

  res.json(result);
};

exports.getBookById = (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });

  res.json(book);
};

exports.createBook = (req, res) => {
  const newBook = {
    id: books.length + 1,
    ...req.body
  };

  books.push(newBook);
  res.status(201).json(newBook);
};

exports.updateBook = (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });

  Object.assign(book, req.body);
  res.json(book);
};

exports.deleteBook = (req, res) => {
  const index = books.findIndex(b => b.id == req.params.id);
  if (index === -1)
    return res.status(404).json({ message: "Book not found" });

  books.splice(index, 1);
  res.json({ message: "Book deleted successfully" });
};