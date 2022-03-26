// Routes index.js
const express = require("express");
const router = express.Router();

// Bring in Url Model
const Url = require("../models/Url");

// @route   GET /:code
// @desc    Redirect to long/original URL
router.get("/:code", async (req, res) => {
  let url;
  try {
    url = await Url.findOne({
      urlCode: req.params.code,
    });
  } catch (error) {
    console.log(`routes/index.js Error: ${error}`);
    res.status(500).json("Server Error");
  }

  if (url) {
    return res.redirect(url.longUrl);
  } else {
    return res.status(404).json({
      success: false,
      msg: "No URL Found",
    });
  }
});

module.exports = router;
