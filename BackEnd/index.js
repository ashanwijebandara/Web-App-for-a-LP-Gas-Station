const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const orderRouter = require("./routes/order");
const userRouter = require("./routes/user");
const paymentRouter = require('./routes/payment')


 
const app =express()


app.use(express.json()) 
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.use("/orders",orderRouter);
app.use("/user",userRouter); 
app.use("/payment",paymentRouter);



 

app.use(express.json())
app.listen(3001,() =>{
    console.log("server is running")
})
 