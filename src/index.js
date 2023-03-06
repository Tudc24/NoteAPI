const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const mongoose = require("mongoose");

app.use(express.json());

app.use(cors());

app.use("/users",userRouter);
app.use("/note",noteRouter);

app.get("/",(req,res) =>{
    res.send("Note API");
});

const PORT = process.env.PORT || 3000;
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on port on "+PORT)
    });
})
.catch((error)=>{
    console.error(error);
})

// app.listen(3000, ()=>{
//     console.log("Server started on port no 3000")
// })