//data structure and database logic

const mongoose = require('mongoose');
const applicationSchema = new mongoose.Schema({
    //who is applying
   userName: {
    type: String, 
    required: true,
  },
  //job details
  company:{type: String, required: true},
  position:{type: String, required: true},
  jobLink:{type: String},
  email: {type: String, required: true},
  status: {type: String, required: true, enum: ["Applied", "Interviewing", "Rejected", "Offer"]},
  notes: {type: String, required: false, default: "no notes yet"  }
}, {timestamps: true })



module.exports = mongoose.model('Application', applicationSchema);