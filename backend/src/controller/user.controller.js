import User from "../models/User.js";

// getAll
const getAllUser = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({ message: "Users", data: users });
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};

// getById
const getByIdUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json({ message: "User one", data: user });
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};

// post
const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json({ message: "Created", data: savedUser });
  } catch (error) {
    res.status(500).json({ message: "Failed" });
  }
};

// update
const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const update = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ message: "Updated", data: update });
  } catch (error) {
    res.status(500).json({ message: "Failed Updated" });
  }
};

// delete
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed Deleted" });
  }
};

export { getAllUser, getByIdUser, createUser, updateUser, deleteUser };
