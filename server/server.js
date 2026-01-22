const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const https = require("https"); // Use https for self-ping
const Placements = require("./routes/placementsRoute");
const eventRoute = require("./routes/eventroute");
const JAF = require("./routes/jaf");
const News = require("./routes/newsRoute");
const Teams = require("./routes/teamRoute");

const app = express();
dotenv.config();
const port = process.env.PORT;
const cloudinary = require('cloudinary').v2;

const adminRoute = require("./routes/adminroute");
// ...existing code...
app.use("/admin/signin/", adminRoute);
// ...existing code...
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Set a limit of 10mb for incoming JSON requests
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port} http://localhost:${port}`);

  // Self-ping every 10 seconds to prevent the server from sleeping
  setInterval(() => {
    https.get(`https://tnp-website-new-version-5i79.onrender.com`, (res) => {
      console.log(`Pinged server - Status Code: ${res.statusCode}`);
    }).on('error', (err) => {
      console.error(`Error pinging server: ${err.message}`);
    });
  }, 1000*6*10); // 10 seconds
});
