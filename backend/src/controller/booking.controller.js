import Booking from "../models/Booking.js";

// create booking
const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);

  try {
    const savedBooking = await newBooking.save();

    res
      .status(200)
      .json({ message: "Your tour is booked", data: savedBooking });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// get One
const getOneBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Booking.findById(id);

    res.status(200).json({
      message: "Success",
      data: book,
    });
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};

// get All
const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find();

    res.status(200).json({
      message: "Success",
      data: books,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { createBooking, getOneBooking, getAllBooking };
