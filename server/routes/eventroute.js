const router = require("express").Router();
const Event = require("../models/event");

router.post("/create", async (req, res) => {
  const newEvent = new Event({
    eventName: req.body.eventName,
    eventOrg: req.body.eventOrg,
    eventType: req.body.eventType,
    eventDesc: req.body.eventDesc,
    eventDate: req.body.eventDate,
  });
  try {
    const thisevent = await newEvent.save();
    res.status(200).json(thisevent);
  } catch (err) {
    console.log(err);
  }
});

router.get("/getall", async (req, res) => {
  try {
    const allevents = await Event.find();
    res.status(200).json(allevents);
  } catch (err) {
    console.log(err);
  }
});

router.post("/delete", async (req, res) => {
  const delEvent = await Event.deleteOne({ _id: req.body.eventid });
});

module.exports = router;
