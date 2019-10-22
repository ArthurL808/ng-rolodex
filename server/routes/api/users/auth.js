const express = require("express");
const User = require("../../../database/models/User");
const router = express.Router();
const passport = require("passport");

const bcrypt = require("bcryptjs");

const saltRounds = 12;

router.post("/login",
  passport.authenticate("local"), function (req,res) {
      console.log(req.user)  
    res.json(req.user)
  }
);

router.post("/register", (req, res) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      console.log(err.message);
    } // return 500

    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) {
        console.log(err.message);
      } // return 500

      return new User({
        username: req.body.username,
        password: hash
      })
        .save()
        .then(user => {
          console.log(user);
          return res.json(user);
        })
        .catch(err => {
          console.log(err.message);
          return res.send("Error creating account");
        });
    });
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.send("logged out");
});

module.exports = router;
