var express = require("express");
var router = express.Router();
const db = require("../db/index");

/* GET users listing. */
router.get("/", (req, res) => {
  //console.log("we are hitting the appointments route")
  db.query("Select * from profile")
    .then((data) => {
      const profiles = data.rows;
      res.json(profiles);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;