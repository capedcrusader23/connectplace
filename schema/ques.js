var mongoose=require('mongoose');
var schema=mongoose.Schema;

var ans=new schema({
cont:{
  type:String
},
aid:{
  type:Number
},
upvote:{
  type:[Number]
},
downvote:{
  type:[Number]
},
per:{
  type:Number
},
name:{
  type:String
},
time:{
  type:String
}
});
var ques=new schema({
topic:{
  type:String
},
qid:{
  type:Number
},
content:{
  type:String
},
upvote:{
  type:Map,
  of:String
},
downvote:{
  type:[String]
},
ans:{
  type:Number
},
ansby:{
  type:String
},
anser:{
  type:[ans]
},
category:{
type:[String]
},
time:{
  type:Date
}
});


var que=mongoose.model('ques',ques);

module.exports=que;
