import { Router } from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import {
  createBooking,
  getAllBooking,
  getOneBooking,
} from "../controller/booking.controller.js";

const bookingRouter = Router();

bookingRouter.post("/booking", verifyUser, createBooking);
bookingRouter.get("/booking/:id", verifyUser, getOneBooking);
bookingRouter.get("/booking", verifyAdmin, getAllBooking);

export default bookingRouter;
