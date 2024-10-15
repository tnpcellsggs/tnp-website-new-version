const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const Placements = require("./routes/placementsRoute");
const eventRoute = require("./routes/eventroute");
const JAF = require("./routes/jaf");
const News = require("./routes/newsRoute");
const Teams = require("./routes/teamRoute");

const app = express();
dotenv.config();
const port = process.env.PORT;
const cloudinary = require('cloudinary').v2;


// Set a limit of 10mb for incoming JSON requests
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// ... your routes and other middleware


// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
// const mongoURI1 = `mongodb://127.0.0.1/placements`;

app.use(cors());

mongoose.connect(process.env.MONGOURI, (err) => {
  if (err) console.log(err);
  else console.log("Connected to MongoDB Placements");
});

app.use(express.json());

app.use("/admin/placements/", Placements);
app.use("/admin/events/", eventRoute);
app.use("/sendFile", JAF);
app.use("/newsUpdates", News);
app.use("/teamform", Teams);

// const PORT = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port} http://localhost:${port}`);
});


