const express = require("express");
const app = express();
const PORT = 3001;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const messageRoutes = require("./routes/messageRoutes");
const orderRoutes = require("./routes/orderRoutes");
const taskRoutes = require("./routes/taskRoutes");
const foxRoute = require("./routes/foxRoute");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://checkpoint1_user:checkpoint1@ds259210.mlab.com:59210/checkpoint1");

app.use(express.static("public"));

// make app listen to port 3001


app.get("/dateTime", (req,res,next) => {
    res.send(new Date());
});

app.get("/newComments", (req,res,next) => {
    res.send("33");
});

app.get("/newTasks", (req,res,next) => {
    res.send("12");
})

app.get("/newOrders", (req,res,next) => {
    res.send("15");
})

app.get("/tickets", (req,res,next) => {
    res.send('4');
})

app.use(bodyParser.json());
app.use(messageRoutes);
app.use(orderRoutes);
app.use(taskRoutes);
app.use("/", foxRoute);

// app.listen(3001, (err) => {
    //     if (err) {
        //         return console.log("Error", err);
        //     }
        // });
                
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});