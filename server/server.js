const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const Placements = require("./routes/placementsRoute");
const eventRoute = require("./routes/eventroute");
const JAF = require("./routes/jaf");
const News = require("./routes/newsRoute");

const app = express();
dotenv.config();
const port = 4019;
const mongoURI1 = `mongodb://127.0.0.1/placements`;

app.use(cors());

mongoose.connect(mongoURI1, (err) => {
  if (err) console.log(err);
  else console.log("Connected to MongoDB Placements");
});

app.use(express.json());

app.use("/admin/placements/", Placements);
app.use("/admin/events/", eventRoute);
app.use("/sendFile", JAF);
app.use("/newsUpdates", News);

// const PORT = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port} http://localhost:${port}`);
});


