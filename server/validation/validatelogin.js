const Validator=require('validator')
const isempty=require('./is-empty.js')
module.exports=function validateRegisterInput(data){
let error={};
data.email=!isempty(data.email)?data.email:'';
data.password=!isempty(data.password)?data.password:'';
//data.dd=!isempty(data.dd)?data.dd:'';
//data.mm=!isempty(data.mm)?data.mm:'';
//data.yy=!isempty(data.yy)?data.yy:'';
console.log(data)
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

return{
  error,
  isValid:isempty(error)
}
}
