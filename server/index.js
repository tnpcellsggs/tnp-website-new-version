const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const Placements = require("./routes/placementsRoute");

const app = express();
dotenv.config();
const port = 4019;
const mongoURI = `mongodb://127.0.0.1/placements`;

app.use(cors());

mongoose.connect(mongoURI, (err) => {
  if (err) console.log(err);
  else console.log("Connected to MongoDB");
});

app.use(express.json());

app.use("/admin/placements/", Placements);

// const PORT = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


