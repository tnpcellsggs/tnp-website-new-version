const router = require("express").Router();
const Admin = require("../models/admin");

// for unique token generation for user
// const jwt = require('jsonwebtoken');

// for password encryption
// const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  try {

    // let auth_secret = process.env.AUTH_SECRET;
    // Password Hashing
    // a secret password is created here using the bcrypt js library module and used to encypt the password

    // now it was created using the following code and stored in database
    // const salt = await bcrypt.genSalt(10);
    // const secretPassword = await bcrypt.hash(req.body.password, salt);

    // creating a payload
    let payload = {
      username: req.body.username,
      password: req.body.password
    }
    // creating a jwt web token
    // let authToken = jwt.sign(payload, auth_secret);
    const admin = await Admin.findOne({ username: payload.username });
    // comparing passwords

    // a hash is created of the entered password using the entered password
    // the password in database is stored by encrypting the secret_auth_key, so the hash matches with stored hash it unlocks the sign in option
    // let passwordCompare = await bcrypt.compare(secretPassword, admin.password);

    // if (!passwordCompare) {
    //   return res.status(400).json({
    //     error: "Invalid Credentials"
    //   });
    // }
    // !admin && res.status(404).json("User not found");
    // const password = await Admin.findOne({ password: authToken });
    // !password && res.status(401).json("Wrong password");


    res.status(200).json({ ok: 'ok' });
  } catch (err) {
    console.log(err);
    // res.status(500).json(err);
  }
});

module.exports = router;
