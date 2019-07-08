const question=require('../models/question.js')
const validateQuery=require('../validation/validatequery.js')
const User=require('../models/user')
const jwt=require('jsonwebtoken')
const compan=require('../models/comapny')
const lang=require('../models/language')


module.exports={
    postquery:(req,res)=>{
        const {error,isValid}=validateQuery(req.body);
        if(!isValid)
        {
        return res.status(400).json(error);
        }
        let query=new question();
        query.category=req.body.category;
        query.content=req.body.content;
        query.upvotes=[];
        query.downvotes=[];
        query.ques=req.body.ques
        query.createdAt=Date.now();
        query.comments=[]
        query.language=[]
        query.company=[]
        query.save().then((d)=>{
            for(var q=0;q<req.body.language.length;q++){
                let x=req.body.language[q];
            lang.findOne({cat:x}).then((ch)=>{
                console.log(ch)
              if(ch)
              {
                  d.language.push(ch)
              } else
              {
                    let q=new lang()
                    q.cat=x;
                   q.save().then((da)=>{
                      d.language.push(da);
                   });
              }
            }) 
          }
          d.save().then((da)=>{
              console.log("FINAL")
              console.log(da)
          })
        })    
    
    
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
        let ques=await question.find().sort({createdAt:-1});
        console.log(ques)
        res.status(200).json(ques)
    },
    getpost:async(req,res)=>{
        let ques=await question.findOne({_id:req.params.id});
        if(ques)
        {
            res.status(200).json(ques)
        }
        else
        {
            res.status(400)
        }
    },
    upvote:async(req,res)=>{
        console.log(req.user)
        let us=await User.findOne({_id:req.user._id})
        console.log(us)
        if(us)
        {
            let post=await question.findOne({_id:req.params.id})
            if(post.downvotes.filter(like=>like.user.toString()===req.user.id).length>0)
            {
                return res.status(400).json({alreadydisliked:"ALREADY DISLIKED POST"})
            }
            if(post.upvotes.filter(like=>like.user.toString()===req.user.id).length>0)
            {
               const remove=post.upvotes.map(item=>item.user.toString()).indexOf(req.user.id);
               post.upvotes.splice(remove,1)
               let q=await post.save();
               res.status(200).json(q);    
            }
            else
            {
                post.upvotes.unshift({user:req.user.id});
                let q=await post.save();
                res.status(200).json(q);
            } 
        }
        else
        {
            res.status(400).json({"err":"No user found"})
        }
    },

    downvote:async(req,res)=>{
        console.log(req.user)
        let us=await User.findOne({_id:req.user._id})
        console.log(us)
        if(us)
        {
            let post=await question.findOne({_id:req.params.id})
            if(post.upvotes.filter(like=>like.user.toString()===req.user.id).length>0)
            {
                return res.status(400).json({alreadydisliked:"ALREADY Liked POST"})
            }
            if(post.downvotes.filter(like=>like.user.toString()===req.user.id).length>0)
            {
               const remove=post.downvotes.map(item=>item.user.toString()).indexOf(req.user.id);
               post.downvotes.splice(remove,1)
               let q=await post.save();
               res.status(200).json(q);    
            }
            else
            {
                post.downvotes.unshift({user:req.user.id});
                let q=await post.save();
                res.status(200).json(q);
            } 
        }
        else
        {
            res.status(400).json({"err":"No user found"})
        }
    },
    comment:async(req,res)=>{console.log("FOUND")
        let post=await question.findOne({_id:req.params.id})
        let po={
            text:req.body.text,
            name:req.body.name,
            user:req.user.id
        }
        post.comments.unshift(po)
        let p=await post.save();
        res.status(200).json(p);
    }
}