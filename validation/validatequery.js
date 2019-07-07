const Validator=require('validator')
const isempty=require('./is-empty.js')
module.exports=function validateRegisterInput(data){
let error={};
data.content=!isempty(data.content)?data.content:'';
data.category=!isempty(data.category)?data.category:'';
data.ques=!isempty(data.ques)?data.ques:'';

if(Validator.isEmpty(data.content))
{
  error.content="Content is required";
}


if(Validator.isEmpty(data.category))
{
  error.category="category is required";
}

if(Validator.isEmpty(data.ques))
{
  error.ques="Title is required";
}

return{
  error,
  isValid:isempty(error)
}
}
