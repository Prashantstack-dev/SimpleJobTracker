const express = require("express");
const router = express.Router();


router.post("/ping", (req, res) => {
  res.json(req.body);
  console.log(req.body);
});


router.get("/ping", (req,res)=>{
    res.send(`<h1> Pong </h1>`)
})

module.exports = router;