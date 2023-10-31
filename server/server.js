const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const adminRoute = require("./routes/adminroute");
const certificateRoute = require("./routes/certificateroute");
const eventRoute = require("./routes/eventroute");
const Placements = require("./routes/placementsRoute");


const app = express();
dotenv.config();

app.use(cors());

mongoose.connect(process.env.MONGOURI, (err) => {
  if (err) console.log(err);
  else console.log("Connected to MongoDB");
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.use("/admin/signin/", adminRoute);
app.use("/admin/cert/", certificateRoute);
app.use("/admin/events/", eventRoute);
app.use("/admin/placements/", Placements);

const PORT = process.env.PORT || 4019;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


