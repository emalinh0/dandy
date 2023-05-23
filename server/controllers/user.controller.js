import User from "../mongodb/models/User.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve all users" });
  }
};

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = new User({ firstName, lastName, email, password });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const verifyLogin = (req, res) => {
  const { email, password } = req.body;
  try {
    User.findOne({ email: email }).then((user) => {
      if (user) {
        if (user.password === password) {
          res.status(200).json({ message: "Login successful" });
        } else {
          res.status(401).json({ error: "Invalid password" });
        }
      } else {
        res.status(404).json({ error: "User not found" });
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to verify login" });
  }
};

export { getAllUsers, createUser, verifyLogin };
