const express=require('express')
const app=express();
const route=require('./routes/route.js')
const mongoose=require('mongoose')
const passport=require('passport')
const cors=require('cors')
const body=require('body-parser')
mongoose.connect('mongodb://localhost:27017/jiitplacement',()=>{
    console.log("CONNECTETD")
})

app.use(body.json())
app.use(cors())
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport.js')(passport);
app.use(route);

app.listen(1111,()=>{
    console.log("RUNNING AT 1111")
})