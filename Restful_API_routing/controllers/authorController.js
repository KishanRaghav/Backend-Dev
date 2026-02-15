const { authors } = require("../data/db");

exports.getAllAuthors = (req, res) => {
  res.json(authors);
};

exports.getAuthorById = (req, res) => {
  const author = authors.find(a => a.id == req.params.id);
  if (!author)
    return res.status(404).json({ message: "Author not found" });

  res.json(author);
};

exports.createAuthor = (req, res) => {
  const newAuthor = {
    id: authors.length + 1,
    ...req.body
  };

  authors.push(newAuthor);
  res.status(201).json(newAuthor);
};

exports.updateAuthor = (req, res) => {
  const author = authors.find(a => a.id == req.params.id);
  if (!author)
    return res.status(404).json({ message: "Author not found" });

  Object.assign(author, req.body);
  res.json(author);
};

exports.deleteAuthor = (req, res) => {
  const index = authors.findIndex(a => a.id == req.params.id);
  if (index === -1)
    return res.status(404).json({ message: "Author not found" });

  authors.splice(index, 1);
  res.json({ message: "Author deleted successfully" });
};