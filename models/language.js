const mongoose=require('mongoose')
const schema=mongoose.Schema

const cat=new schema({
    cat:{
        type:String
    }
})

let category=mongoose.model('language',cat)
module.exports=category