import express from "express";
import { getAllUsers, createUser } from "../controllers/user.controller.js";

const router = express.Router();

// User routes
router.route("/").get(getAllUsers);
router.route("/").post(createUser);

export default router;
