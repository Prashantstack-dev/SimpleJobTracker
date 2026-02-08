//removed from application.js 
router.post("/", (req,res)=> {
    console.log(req.body);
    res.json({
        message: "Application saved",
        data: req.body
    })
})

router.get("/", (req, res) => {
  res.json({message: "Get all applications"});
});

router.delete("/:id", (req, res) => {
  res.json({message : `Deleted application ${req.params.id}`})
});

router.put("/:id", (req, res) => {
 res.json({message: `Updated application ${req.params.id}`});
});