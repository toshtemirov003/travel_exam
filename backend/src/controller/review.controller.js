import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

const createReview = async (req, res) => {
  const { tourId } = req.params;
  const newReview = new Review({ ...req.body });

  try {
    const savedReview = await newReview.save();

    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });

    res.status(200).json({ message: "Review submitted", data: savedReview });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit" });
  }
};

export default createReview;
