require('dotenv').config(); // to load .env file
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

// Setting up mongoose connection
mongoose.set("strictQuery", false);

const cors = require('cors');
app.use(cors()); // This allows your frontend to talk to your backend
async function connectMongoose() {
try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB Connected...");
} catch (err) {
  console.error("Failed to connect to MongoDB:", err);
  process.exit(1); //Stop server if DB fails
}
}
connectMongoose(); //Run the connection


app.use(express.json());

//routes
const aboutRoute = require("./routes/about");
const aboutPing = require("./routes/testPing");
const applicationRoute = require("./routes/applications");

//about 
app.use("/about", aboutRoute);
app.use("/testPing", aboutPing);

//application routes
app.use("/api/applications", applicationRoute);

app.get("/", (req,res)=> {
    //  console.log(req.rawHeaders);
    res.send("<h1>API running....</h1>");
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})