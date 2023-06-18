import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({ message: "You're not authorize" });
  }

  // if token is exist then verify the token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      res.status(401).json({ message: "token is invalid" });
    }

    req.user = user;
    next(); // don't forget to call next
  });
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.role === "admin") {
      next();
    } else {
      return res.status(401).json({ message: "You're not authenticated" });
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      return res.status(401).json({ message: "You're not authorize" });
    }
  });
};

export { verifyToken, verifyUser, verifyAdmin };
