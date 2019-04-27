const mongoose=require('mongoose')
const schema=mongoose.Schema;

const user=new schema({
name:{
  type:String,
  required:true
},
email:{
  type:String,
  required:true
},
avatar:{
  type:String
},
date:{
  type:Date,
  default:Date.now()
},
password:{
  type:String
}
})

const us=mongoose.model('user',user)
module.exports=us
