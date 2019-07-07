const Validator=require('validator')
const isempty=require('./is-empty.js')
module.exports=function validateRegisterInput(data){
let error={};
data.name=!isempty(data.name)?data.name:'';
data.email=!isempty(data.email)?data.email:'';
data.password=!isempty(data.password)?data.password:'';
data.dd=!isempty(data.dd)?data.dd:'';
data.mm=!isempty(data.mm)?data.mm:'';
data.yy=!isempty(data.yy)?data.yy:'';
data.mobile=!isempty(data.mobile)?data.mobile:'';
if(Validator.isEmpty(data.name))
{
  error.name="Name is required";
}
if(!Validator.isLength(data.name,{min:2,max:30}))
{
  error.name="Name must be between 2 and 30 character"
}

if(Validator.isEmpty(data.email))
{
  error.email="Email is required";
}
if(!Validator.isEmail(data.email))
{
  error.email="Invalid email"
}
if(!Validator.isLength(data.password,{min:6,max:30}))
{
  error.password="Password must be of 6 digit";
}
if(Validator.isEmpty(data.dd))
{
  error.Date="Date is required";
}
if(Validator.isEmpty(data.mm))
{
  error.Month="Month is required";
}
if(Validator.isEmpty(data.yy))
{
  error.Year="year is required";
}
return{
  error,
  isValid:isempty(error)
}
}
