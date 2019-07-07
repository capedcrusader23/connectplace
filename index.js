const express=require('express')
const app=express();
const route=require('./routes/route.js')
const mongoose=require('mongoose')
const passport=require('passport')
const cors=require('cors')
const body=require('body-parser')
mongoose.connect('mongodb://uphaar22:uphaar22@ds149754.mlab.com:49754/jiitfile',function(){
    console.log("Connected")
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