//register new
const express = require("express");
const Joi = require("joi");
const { Tourist } = require("../models/tourist");

const router = express.Router();

router.post("/", async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().min(3).max(200).email().required(),
  });
  console.log("Debug: Hello");
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    let tourist = await Tourist.findOne({ email: req.body.email });
    if (tourist)
      return res.status(200).send("This email is already registered");

    const { email } = req.body;
    tourist = new Tourist({
      email,
    });

    await tourist.save();
    res.status(200).send(tourist);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

module.exports = router;
