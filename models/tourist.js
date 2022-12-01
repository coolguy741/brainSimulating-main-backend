const mongoose = require("mongoose");

const touristSchema = new mongoose.Schema({
  email: {
    type: String,
    minlength: 3,
    maxlength: 200,
    required: true,
    unique: true,
  },
});

const Tourist = mongoose.model("Tourist", touristSchema);

exports.Tourist = Tourist;
