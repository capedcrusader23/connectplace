var mongoose=require('mongoose')
const schema= mongoose.Schema
const cat=new schema({
  name:{
    type:String
  }
})
module.exports=mongoose.model('cat',cat)
