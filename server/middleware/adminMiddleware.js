module.exports = (req, res, next) => {
  try {
    // assuming galing sa authMiddleware
    if (!req.user) {
      return res.status(401).json({ message: "Not authorized" });
    }

    // simple check (pwede mo palitan later)
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
