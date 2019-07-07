const mongoose=require('mongoose')
const schema=mongoose.Schema

const cat=new schema({
    cat:{
        type:String
    }
})

let category=mongoose.model('category',cat)
module.exports=category