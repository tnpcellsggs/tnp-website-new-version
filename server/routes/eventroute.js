const router = require("express").Router();
const Event = require("../models/event");

router.post("/create", async (req, res) => {
  const newEvent = new Event({
    eventName: req.body.eventName,
    eventOrg: req.body.eventOrg,
    eventType: req.body.eventType,
    eventDesc: req.body.eventDesc,
    eventDate: req.body.eventDate,
    eventVideoLink: req.body.eventVideoLink,
    eventImageLink: req.body.eventImageLink,
    eventId: req.body.eventName + req.body.eventDate,
  });
  try {
    const thisevent = await newEvent.save();
    res.status(200).json(thisevent);
  } catch (err) {
    // console.log(err);
  }
});

router.get("/getall", async (req, res) => {
  try {
    const allevents = await Event.find();
    res.status(200).json(allevents);
  } catch (err) {
    res.status(405).send("Internal Error Occured");
  }
});

router.put("/editEvent", async (req, res) => {
  try {
    let ID = req.body.eventId;
    const newEvent = {
      eventName: req.body.eventName,
      eventOrg: req.body.eventOrg,
      eventType: req.body.eventType,
      eventDesc: req.body.eventDesc,
      eventDate: req.body.eventDate,
      eventVideoLink: req.body.eventVideoLink,
      eventImageLink: req.body.eventImageLink,
      eventId: req.body.eventName + req.body.eventDate
    }
    let record = await Event.find({ eventId: ID });
    if (record.length === 0) {
      res.status(400).send("Record Not Found");
    }
    else {
      record = await Event.findOneAndUpdate(
        {
          eventId: ID
        },
        {
          $set: newEvent
        },
        {
          new: true
        }
      );
      res.status(200).json(record);
    }
  } catch (err) {
    // console.log(err);
  }
});

router.delete("/delete", async (req, res) => {
  try {
    let ID = req.body.event.eventId;
    let record = await Event.find({ eventId: ID });
    if (record.length === 0) {
      res.status(404).send("Record Not Found");
    }
    else {
      record = await Event.findOneAndDelete({ eventId: ID });
      res.status(200).json({ "success": "Record deleted successfully" });
    }
  }
  catch (err) {
    res.status(400).send("Internal Error Occured");
  }
});

module.exports = router;
