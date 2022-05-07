const mongoose = require("mongoose");

const thingsSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    time: { type: String, required: false },
    rating: { type: Number, required: false },
    rnumber: { type: Number, required: false },
    cancel: { type: String, required: false },
    price: { type: Number, required: false },
    ptravel: { type: String, required: false },
    lprice: { type: String, required: false },
    etc1: { type: String, required: false },
    etc2: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Thing = mongoose.model("thing", thingsSchema);

module.exports = Thing;
