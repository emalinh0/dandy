import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import userRouter from "./routes/user.routes.js";
import ticketRouter from "./routes/ticket.routes.js";
import eventRouter from "./routes/event.routes.js";
import venueRouter from "./routes/venue.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/tickets", ticketRouter);
app.use("/api/v1/events", eventRouter);
app.use("/api/v1/venues", venueRouter);

app.get("/", (req, res) => {
  res.send({ message: "Server ongoing" });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("Server started on port http://localhost:8080");
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
