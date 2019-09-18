const express=require('express')
const app=express();
const route=require('./routes/route.js')
const mongoose=require('mongoose')
const passport=require('passport')
const cors=require('cors')
const body=require('body-parser')
const request=require('request')
const path=require('path')
//mongoose.connect('mongodb://uphaar23:uphaar23@ds135796.mlab.com:35796/jiitplacement',{useNewUrlParser: true})
mongoose.connect('mongodb://localhost:27017/jiitplacement',{useNewUrlParser: true})

app.use(body.json())
app.use(cors())
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport.js')(passport);

app.use(route);
if(process.env.NODE_ENV==='production')
{
    app.us(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','buidl','index.html'));
    })
}
const port=process.env.PORT||1111;

app.listen(port,()=>{
    console.log("RUNNING AT 1111") 
})
