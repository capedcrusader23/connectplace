const mongoose=require('mongoose')
const schema=mongoose.Schema;

let user=new schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
   pass:{
       type:String
   },
   date:{
       dd:{
           type:Number
       },
       mm:{
           type:Number
       },
       yy:{
           type:Number
       }
   },
   college:{
       type:String
   },
   currently:{
       type:String
   },
   mobile:{
       type:String
   },
   lastlogin:{
       type:Date
   },
   pic:{
       type:String
   },
   exprience:{
       type:Object
   }
})
let use=mongoose.model('user',user)
module.exports=use;
