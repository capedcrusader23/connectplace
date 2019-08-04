const User=require('../models/user.js')
const CommonController=require('./CommonComtroller.js')
const validateRegisterInput=require('../validation/validate.js')
const jwt=require('jsonwebtoken')
const {secret}=require('../config/keys.js')
const validateLoginInput=require('../validation/validatelogin')
User.find().then((da)=>{
    console.log(da)
})

module.exports={
register:async(req,res)=>{
console.log(req.body)
const {error,isValid}=validateRegisterInput(req.body);
if(!isValid)
{
return res.status(400).json(error);
}
const us=await User.findOne({email:req.body.email});
console.log(us)
if(us)
{
    res.status(400).json({"error":"User with email already exist"});
}
else
{
let us=new User();
us.name=req.body.name;
us.email=req.body.email;
us.pass=await CommonController.hashpassword(req.body.password)
us.date.dd=req.body.dd;
us.date.mm=req.body.mm;
us.date.yy=req.body.yy;
us.college=req.body.college;
us.currently=req.body.currently;
us.mobile=req.body.mobile;
us.lastlogin=null;
us.pic=null;
let us2=await us.save();
console.log(us2)
res.json({"success":"REGISTERED",us:us2});
}
},

login:async(req,res)=>{
    const {error,isValid}=validateLoginInput(req.body);
if(!isValid)
{
return res.status(400).json(error);
}
const us=await User.findOne({email:req.body.email})

if(us)
{
let check=await CommonController.compare(req.body.password,us.pass);
console.log(check)
if(check==true)
{
 const payload={id:us._id};
 const token=await jwt.sign(payload,secret,{expiresIn:36000}); 
 res.json({"token":"Bearer "+token})  
}
else
{
    res.status(400).json({"error":"wrong password"})
}
}
else
{
    res.status(400).json({"error":"Email don't Exist"})
}
}


}