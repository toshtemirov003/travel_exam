import { Router } from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getByIdTour,
  getFeaturedTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "../controller/tour.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = Router();

// create new tour
router.get("/tours", getAllTour);
router.get("/tours/:id", getByIdTour);
router.get("/tours/search/getTourBySearch", getTourBySearch);
router.get("/tours/search/getFeaturedTours", getFeaturedTour);
router.get("/tours/search/getTourCount", getTourCount);
router.post("/tours", verifyAdmin, createTour);
router.put("/tours/:id", verifyAdmin, updateTour);
router.delete("/tours/:id", verifyAdmin, deleteTour);

export default router;
