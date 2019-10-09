const Validator=require('validator')
const isempty=require('./is-empty.js')
module.exports=function validateRegisterInput(data){
let error={};
data.name=!isempty(data.name)?data.name:'';
data.email=!isempty(data.email)?data.email:'';
data.password=!isempty(data.password)?data.password:'';
//data.dd=!isempty(data.dd)?data.dd:'';
//data.mm=!isempty(data.mm)?data.mm:'';
//data.yy=!isempty(data.yy)?data.yy:'';
data.mobile=!isempty(data.mobile)?data.mobile:'';
data.current=!isempty(data.current)?data.current:'';
data.college=!isempty(data.college)?data.college:''
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
  error.email2="Invalid email"
}
if(!Validator.isLength(data.password,{min:6,max:30}))
{
  error.password="Password must be of 6 digit";
}
if(!Validator.isLength(data.mobile,{min:10,max:10}))
{
    error.mobile="Invalid Number"
}
if(Validator.isEmpty(data.current))
{
  error.current="Current year is required/if Passout add Passout";
}

if(Validator.isEmpty(data.current))
{
  error.college="College is required";
}


return{
  error,
  isValid:isempty(error)
}
}
