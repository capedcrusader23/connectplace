const Validator=require('validator')
const isempty=require('./is-empty')
module.exports=function validateRegisterInput(data){
let error={};
if(!Validator.isLength(data.name,{min:2,max:30}))
{
  error.name="Name must be between 2 and 30 character"
}

return{
  error,
  isValid:isempty(error)
}


}
