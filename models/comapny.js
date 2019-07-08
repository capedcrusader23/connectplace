const mongoose=require('mongoose')
const schema=mongoose.Schema

const cat=new schema({
    name:{
        type:String
    }
})

let category=mongoose.model('company',cat)
module.exports=category