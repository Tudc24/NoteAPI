const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");

const mongoose = require("mongoose");

app.use(express.json());

app.use((req, res, next)=>{
    console.log("HTTP - " + req.method + " , URL - " + req.url);
    next();
})

app.use("/users",userRouter);
app.use("/note",noteRouter);

app.get("/",(req,res) =>{
    res.send("Hello");
});
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://admin:admin@cluster0.efehled.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(3000, ()=>{
        console.log("Server started on port on 3000")
    });
})
.catch((error)=>{
    console.error(error);
})

// app.listen(3000, ()=>{
//     console.log("Server started on port no 3000")
// })