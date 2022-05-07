const express = require("express");
const router = express.Router();
const v1 = require("../model/things.model");

router.get("", async (req, res) => {
  try {
    const v2 = await v1.find().lean().exec();
    return res.status(200).send(v2);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

router.post("", async (req, res) => {
  try {
    const v2 = await v1.create(req.body);
    return res.status(200).send(v2);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const v2 = await v1.findById(req.params.id).lean().exec();
    return res.status(200).send(v2);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const v2 = await v1.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(v2);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const v2 = await v1.findByIdAndDelete(req.params.id, req.body);
    return res.status(201).send(v2);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

module.exports = router;
