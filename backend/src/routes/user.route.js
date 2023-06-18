import { Router } from "express";
import {
  deleteUser,
  getAllUser,
  getByIdUser,
  updateUser,
} from "../controller/user.controller.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const userRouter = Router();
userRouter.get("/users", verifyAdmin, getAllUser);
userRouter.get("/users/:id", verifyUser, getByIdUser);
userRouter.put("/users/:id", verifyUser, updateUser);
userRouter.delete("/users/:id", verifyUser, deleteUser);

export default userRouter;
