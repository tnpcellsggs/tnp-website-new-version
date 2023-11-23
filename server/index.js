// imports for the express app
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const adminRoute = require("./routes/adminroute");
const certificateRoute = require("./routes/certificateroute");
const eventRoute = require("./routes/eventroute");
const Placements = require("./routes/placementsRoute");
const JAF = require("./routes/jaf");
const News = require("./routes/newsRoute");

// create express app
const app = express();

// config environment variable files to use the variables
dotenv.config();

app.use(cors());

mongoose.connect(process.env.MONGOURI, (err) => {
  if (err) console.log(err);
  else console.log("Connected to MongoDB");
});

app.use(express.json());

app.get("/", (req, res) => {
  // res.setHeader('Content-Type', 'application/json');
  res.json({
    message: "Welcome to homepage"
  });
  // return "Hello";
});

// routes for the endpoints
app.use("/admin/signin/", adminRoute);
app.use("/admin/cert/", certificateRoute);
app.use("/admin/events/", eventRoute);
app.use("/admin/placements/", Placements);
app.use("/sendFile", JAF);
app.use("/newsUpdates", News);

const PORT = process.env.PORT || 4019;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`,`http://localhost:${PORT}`);
});

// Export the express API
// module.exports = app;