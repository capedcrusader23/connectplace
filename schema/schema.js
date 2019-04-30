var mongoose=require('mongoose');
var schema=mongoose.Schema;

var user=new schema({
name:{
  type:String
},
email:{
  type:String
},
Eid:{
  type:Number
},
pass:{
  type:String
},
date:
    {
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
school:{
  type:String
},
college:{
  type:String
},
currently:{
  type:String
},
    country:{
  type:String
    },
    mobile:{
  type:String
    },
    lastl:{
  type:Date,
        default:Date.now()
    },
    pic:{
    type:String
    }
});
user.methods.vaild=function(){
  return this.pass
};


var use=mongoose.model('user',user);
module.exports=use;
