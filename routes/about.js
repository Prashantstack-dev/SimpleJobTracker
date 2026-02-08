const express = require("express");
const router = express.Router();

//req.params only works when your route has URL parameters, like: app.get("/about/:id", ...)
router.post("/about/:id", (req, res) => {
  res.json({
    params: req.params,
    body: req.body,
    message: "Data received"
  });

  console.log("PARAMS:", req.params);
  console.log("BODY:", req.body);
});

module.exports = router;