function validateYear(req, res, next) {
  const { year } = req.body;

  if (year) {
    if (isNaN(year)) {
      return res.status(400).json({ message: "Year must be a number" });
    }

    if (year < 1000 || year > new Date().getFullYear()) {
      return res.status(400).json({ message: "Year is out of valid range" });
    }
  }

  next();
}

module.exports = validateYear;