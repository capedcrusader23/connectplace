const question=require('../models/question.js')
const validateQuery=require('../validation/validatequery.js')
const User=require('../models/user')
const jwt=require('jsonwebtoken')
module.exports={
    postquery:async(req,res)=>{
        console.log(req.body)
        const {error,isValid}=validateQuery(req.body);
        if(!isValid)
        {
        return res.status(400).json(error);
        }
        let query=new question();
        query.category=req.body.category;
        query.content=req.body.content;
        query.upvotes=null;
        query.downvotes=null;
        query.ques=req.body.ques
        query.createdAt=Date.now();
        if(req.body.topic)
        {
            for(var q=0;q<req.body.topic.length;q++)
            {
                query.topic[req.body.topic[q]]=1;
            }
        }
        query.per=req.user._id
        let que=await query.save();
        return res.status(200).json({"success":"Done with the post"});
    },

    fetchprofile:async(req,res)=>{
        let ques=await question.findOne({per:req.params.id})
        let use=await User.findOne({_id:req.params.id})
        let payload={
            user:use,
            questions:ques
        }
        res.status(200).json(payload)
    },

    landing:async(req,res)=>{
        let ques=await question.find().sorted({createdAt:-1});
        res.json(ques)
    }
}