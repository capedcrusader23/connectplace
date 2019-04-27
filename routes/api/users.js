const express=require('express');
const route=express.Router();
const User=require('../../model/user.js');
const {secret}=require('../../config/keys.js')
const gravatar=require('gravatar')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const passport=require('passport')
const validateRegisterInput=require('../../validation/validation')
route.get('/test',(req,res)=>{
  res.json({msg:"working"})
})

route.post('/register',(req,res)=>{
  const {error,isValid}=validateRegisterInput;
  if(!isValid)
  {
    return res.status(400).json({error})
  }
User.findOne({email:req.body.email}).then((user)=>{
if(user)
{
return res.status(400).json({msg:"Already exist"})
}
else
{
  const avatar=gravatar.url(req.body.email,{s:'200',d:'retro'})
  const newUser=new User({
    name:req.body.name,
    email:req.body.email,
    avatar,
    password:req.body.password
  })
  console.log(newUser)
bcrypt.genSalt(10,(err,salt)=>{
  bcrypt.hash(newUser.password,salt,(err,hash)=>{
    newUser.password=hash;
    newUser.save().then(da=>res.json(da))
  })
})

}
})
})
route.post('/login',(req,res)=>{
  const email=req.body.email;
  const password=req.body.password;

  User.findOne({email}).then((da)=>{
    if(!da)
    {
      return  res.status(404).json({err:"email not found"});
    }
    else
    {
      bcrypt.compare(password,da.password).then((result)=>{
        if(result==false)
        {
          return res.status(400).json({err:"password invalid"})
        }
        else {

          const payload={id:da.id,name:da.name};
        jwt.sign(payload,secret,{expiresIn:3600},(err,token)=>{
          res.json({
            sucess:true,
            token:'Bearer '+token
          })
        });
        }
      })
    }

  })
})


route.get('/current',passport.authenticate('jwt',{session:false}),(req,res)=>{
  console.log({id:req.user.id,email:req.user.email,name:req.user.name})
})

module.exports=route;
