// const config = require("config");
const jwt = require("jsonwebtoken");
const express = require("express");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
// const _ = require("lodash");
const User = require("../models/User");

const router = express.Router();

process.env.SECRET_KEY = 'secret'
User.sync();

function validate(req) {
  const schema = {
    email: Joi.string()
      .min(5)
      .max(255)
      .required(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };

  return Joi.validate(req, schema);
}

// User Login
router.post("/login", async (req, res) => {
  console.log('Someone is going to login')
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
          console.log("User logged in: " + req.body.email)
        }
      } else {
        res.status(400).json({ error: 'User does not exist' })
        console.log('User does not exist')
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
});

router.post("/register", async (req, res) => {
  // User.sync();

  const userData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }

  User.findOne({ where: {email: req.body.email} })
      .then(user => {
        //console.log("user asdfasdfasfasfsd")
        console.log(req.body.email)
        if (!user) {
          console.log("user not extist")
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            userData.password = hash;
            User.create(userData)
                .then(user => {
                  res.json({ status: user.email + 'Registered!'})
                })
                .catch(err => {
                  res.send({error: err})
                })
          })
        } else {
          res.json({ error: 'User already exists'})
        }
      })
      .catch(err => {
        res.send({error: err})
      })
});

module.exports = router;
