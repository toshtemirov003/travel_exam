import Tour from "../models/Tour.js";

// getAll
const getAllTour = async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page);

  try {
    const tour = await Tour.find()
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({ message: "Tours", count: tour.length, data: tour });
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};

// getById
const getByIdTour = async (req, res) => {
  const { id } = req.params;
  try {
    const tour = await Tour.findById(id).populate("reviews");
    res.status(200).json({ message: "Tour one", data: tour });
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};

//get tour by search
const getTourBySearch = async (req, res) => {
  // here "i" means case sensitive
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    // gte means greater than equal
    const tour = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");
    res.status(200).json({ message: "Successful", data: tour });
  } catch (error) {
    res.status(400).json({ message: "not found" });
  }
};

// get Featured
const getFeaturedTour = async (req, res) => {
  try {
    const tour = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);

    res.status(200).json({ message: "Tours", data: tour });
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};

//get Tour Count
const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({ success: true, data: tourCount });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};

// post
const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res.status(200).json({ message: "Created", data: savedTour });
  } catch (error) {
    res.status(500).json({ message: "Failed" });
  }
};

// update
const updateTour = async (req, res) => {
  const { id } = req.params;
  try {
    const update = await Tour.findByIdAndUpdate(
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
const deleteTour = async (req, res) => {
  const { id } = req.params;
  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed Deleted" });
  }
};

export {
  getAllTour,
  getByIdTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
  createTour,
  updateTour,
  deleteTour,
};
