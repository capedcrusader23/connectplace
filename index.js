const express=require('express')
const app=express();
const route=require('./routes/route.js')
const mongoose=require('mongoose')
const passport=require('passport')

mongoose.connect('mongodb://uphaar22:uphaar22@ds135796.mlab.com:35796/jiitplacement',function(){
    console.log("Connected")
})
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport.js')(passport);
app.use(route);

app.listen(1111,()=>{
    console.log("RUNNING AT 1111")
})