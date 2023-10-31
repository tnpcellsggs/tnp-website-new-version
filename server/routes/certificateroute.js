const router = require("express").Router();
const { default: mongoose } = require("mongoose");
const Certificate = require("../models/certificate");

router.post("/create", async (req, res) => {
  const newCertificate = new Certificate({
    uid: req.body.uid,
    ucode: req.body.ucode,
    recipent: req.body.recipent,
    issued: req.body.issued,
    created: req.body.created,
  });
  try {
    const certificate = await newCertificate.save();
    res.status(200).json(certificate);
  } catch (err) {
    console.log(err);
  }
});

router.get("/getall", async (req, res) => {
  try {
    const allcert = await Certificate.find();
    res.status(200).json(allcert);
  } catch (err) {
    console.log(err);
  }
});

router.get("/getlatest/", async (req, res) => {
  try {
    const lastcert = await Certificate.findOne().sort({ _id: -1 }).limit(1);
    lastcert ? res.status(200).json(lastcert.ucode) : res.json(5665100);
  } catch (err) {
    console.log(err);
  }
});

router.post("/verify/", async (req, res) => {
  const uid = mongoose.Types.ObjectId(req.body.uniqueid);
  try {
    const thiscert = await Certificate.findOne({ _id: uid });
    thiscert
      ? res.status(200).json(thiscert)
      : res.status(404).json("invalid uid");
  } catch (err) {
    console.log(err);
  }
});

router.post("/delete/", async (req, res) => {
  try {
    const delCert = await Certificate.deleteOne({ uid: req.body.uid });
    res.status(200).json(delCert);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
