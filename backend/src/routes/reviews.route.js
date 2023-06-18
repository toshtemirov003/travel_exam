import { Router } from "express";
import createReview from "../controller/review.controller.js";
import { verifyUser } from "../utils/verifyToken.js";

const reviewRouter = Router();
reviewRouter.post("/review/:tourId", verifyUser, createReview);

export default reviewRouter;
