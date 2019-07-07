const mongoose=require('mongoose')
const schema=mongoose.Schema

const question=new schema({
    category:{
        type:String
    },
    content:{   
        type:String
    },
    upvotes:{
        type:Object
    },
    downvotes:{
        type:Object
    },
    topic:{
        type:Object
    },
    language:{
        type:[schema.Types.ObjectId],
        refs:'languages'
    },
    company:{
        type:schema.Types.ObjectId,
        refs:'companys'
    },
    ques:{
        type:String
    },
    per:{
    type:schema.Types.ObjectId,
    ref:'users'
    },
    createdAt:{
        type:Date
    }
})
let que=mongoose.model('question',question)
module.exports=que;