//routes handle HTTP requests and responses.
const express= require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Application = require("../models/Application");
const Schema = mongoose.applicationSchema;

//POST new application (CREATE)
router.post("/", async(req,res)=>{
    try{
        const newApp = await Application.create(req.body);
        res.status(201).json(newApp);
    } catch(err){
       res.status(400).json({message: err.message});
    }
})


// GET all application(READ)

router.get("/", async (req, res) => {
    try{
    const jobs = await Application.find()
    res.status(200).json(jobs);
    } catch(err){
       res.status(400).json({message: err.message})
    }
})
// Update application (Update)
router.put("/:id", async (req, res) => {
    try{
        const updateJobs = await Application.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updateJobs);
    }catch(err){
     res.status(400).json({message: err.message})
    }
})

//Delete application (DELETE)
router.delete("/:id", async (req, res) => {
    try{
        const deletedJobs = await Application.findByIdAndDelete(req.params.id);

        if(!deletedJobs) 
        {return res.status(401).json({message: "Job not found"});}

        res.status(200).json(deletedJobs);
    }catch(err){
       res.status(400).json({message: err.message})
    }
})
module.exports= router;
