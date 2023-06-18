import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// register
const register = async (req, res) => {
  const { username, password, email, photo } = req.body;

  // hashing password
  const salt = bcrypt.genSaltSync(10);
  const hashedPass = bcrypt.hashSync(password, salt);

  try {
    const newUser = new User({
      username,
      password: hashedPass,
      email,
      photo,
    });

    await newUser.save();

    res.status(201).json({ message: "user created", data: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create. Try again " + error.message });
  }
};

// login
const login = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    // if user doesn't exist
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // if user is exist then check the password or compare the password
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // if password is incorrect
    if (!checkCorrectPassword) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const { password, role, ...rest } = user._doc;

    // jwt token
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    // set token in the browser cookies and send the response to the client
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({ token, data: { ...rest }, role });
  } catch (error) {
    res.status(500).json({ message: "Failed to login" });
  }
};
export { register, login };
