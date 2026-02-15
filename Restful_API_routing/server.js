const express = require("express");
const app = express();

const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoutes");

app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});