var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/upload_file", function (req, res, next) {
  // console.log(req.files.new_result.mimetype);
  // console.log(req);

  req.files.new_result.mv("mts-results/new_result.zip");
  res.json({ result: "ok" });
});

module.exports = router;
