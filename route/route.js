var express=require('express');
var passport=require('passport');
var body=require('body-parser');
var url=body.urlencoded({extended:false});
var use=require('../schema/schema.js');

var route=express.Router();
var sess;

route.get("/",function(req,res){
if(req.user)
{
  res.redirect('/user');
}
else {

    res.render('homepage');
}
});
route.get('/signup',(req,res)=>{
  if(req.user)
  {
    res.redirect('/user');
  }
  else {

      res.render('signupjiit');
  }
})

route.get("/login",function(req,res){
  if(req.user){
  res.redirect('/user');
  }
  else {
    res.render('loginjiit')
  }
});

route.get('/google',passport.authenticate('google',{scope:['profile']}))

route.get('/google/redirect',passport.authenticate('google'),function(req,res){
  res.redirect('/user');
});

route.get('/lgn',passport.authenticate('local',{failureRedirect:'/login',successRedirect:'/user','session': true})
);

route.post('/profile',url,function(req,res,next){
  req.check('email','Invalid Email').isEmail();
  req.check('pass','Invalid Password').isLength({min:4});
  var error=req.validationErrors();
  if(error)
  {
    req.session.errors=error;
    res.redirect('/');
  }
  else {
use.findOne({email:req.body.email}).then(function(user){
if(user)
{
  error:"This is already in use"
console.log(error);
}
else {
  new use(
  {"name":req.body.name,"email":req.body.email,"pass":req.body.pass,date:{"dd":req.body.dd,"mm":req.body.mm,"YY":req.body.yy},img:'',Eid:Math.floor(Math.random()*100000000)}
  ).save().then(function(user)
  {
    console.log(user);
  })
}
})

}
});

route.get('/logout',function(req,res){
  req.logout();
  res.redirect('/login');
})

module.exports=route;
