//imports
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const zomatoRoutes=require('./routes/zomato')
const paymentRoutes=require('./routes/razorPay')
const mongoose=require('mongoose')

const DBSTRING = "mongodb+srv://ramesh:A8824803445@cluster0.e1wt0.mongodb.net/zomato44";
//connect to mongoDB 
mongoose.connect(DBSTRING,
     ()=>{
    console.log("mongoDB connected")},
    e=>console.log("error find connect to DB:",e))


//create express server
var app=express()

//add middleware before routes
app.use(bodyParser.json())
app.use(cors())

//middleware routes 
app.use('/zomato',zomatoRoutes)
app.use('/pay',paymentRoutes)

//heroku configuration
if(process.env.NODE_ENV=="production"){
    app.use(express.static("frontend/build"))
    const path=require('path')
      app.get('*',(req,res)=>{
         res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))
      })

}


//listen to a port 
app.listen( process.env.PORT || 7878,()=>{
    console.log('express app is up and running on port 7878')
})