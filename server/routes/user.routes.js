import express from "express";
import {
  getAllUsers,
  createUser,
  verifyLogin,
} from "../controllers/user.controller.js";

const router = express.Router();

// User routes
router.route("/").get(getAllUsers);
router.route("/").post(createUser);
router.route("/login").post(verifyLogin);

export default router;
