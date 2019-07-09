const mongoose=require('mongoose')
const schema=mongoose.Schema

const cat=new schema({
    cat:{
        type:String
    },
    count:{
        type:Number,
        default:0
    }
})

let category=mongoose.model('company',cat)
module.exports=category