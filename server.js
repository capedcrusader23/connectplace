const express=require('express');
const app=express();
const mongoose=require('mongoose');
const key=require('./config/keys.js')
const users=require('./routes/api/users')
const post=require('./routes/api/post')
const profile=require('./routes/api/profile.js')
const bodyParser=require('body-parser')
const passport=require('passport')
const session=require('express-session')
mongoose.connect(key.mongoURL,()=>{
  console.log("DATABASE CONNECTED")
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
 app.use(session({ secret: 'SECRET' }));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport.js')(passport);
app.use('/api/users',users)
app.use('/api/post',post)
app.use('/api/profile',profile)
var port=process.env.port||5000;
app.listen(port,()=>{
  console.log(`Server running on ${port}`)
})
