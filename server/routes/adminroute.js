const router = require("express").Router();
const Admin = require("../models/admin");

router.post("/", async (req, res) => {
  try {
    const admin = await Admin.findOne({ username: req.body.username });
    !admin && res.status(404).json("User not found");
    const password = await Admin.findOne({ password: req.body.password });
    !password && res.status(401).json("Wrong password");

    console.log(admin);
    res.status(200).json(admin);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
