import express from "express";
import * as dotenv from "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/tour.route.js";
import userRouter from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import reviewRouter from "./routes/reviews.route.js";
import bookingRouter from "./routes/booking.route.js";

const app = express();
const corsOption = {
  origin: true,
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());
app.use("/api", router);
app.use("/api", userRouter);
app.use("/api/auth", authRoute);
app.use("/api", reviewRouter);
app.use("/api", bookingRouter);

// database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB database connected");
  } catch (error) {
    console.log("Mongodb database error " + error);
  }
};

// connect().catch((err) => console.log(err));

// async function connect() {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/travel-test");
//     console.log("MongoDB database connected");
//   } catch (error) {
//     console.log("Mongodb database error " + error);
//   }
// }

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  connect();
  console.log(PORT);
});
