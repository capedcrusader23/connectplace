const question=require('../models/question.js')
const validateQuery=require('../validation/validatequery.js')
const User=require('../models/user')
const jwt=require('jsonwebtoken')
const compan=require('../models/comapny')
const lang=require('../models/language')
const async=require('async')
const validateform=require('../validation/validateform.js')
const CommonController=require('./CommonComtroller.js')
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
        let opts={
            person:req.user._id,
            name:req.user.name
        }
        query.per=opts
        async.each(req.body.language,function(tag,callback){
            lang.findOne({cat:tag}).then((da,err)=>{
                
                console.log(err)
                if(err)
                {
                    callback(err)
                    return err;
                }
                else
                {
                    if(da)
                    {
                        da.count++;
                        da.save().then(()=>{
                            let opt={
                                language:da,
                                name:da.cat
                            }
                            query.language.push(opt)
                            callback()
                        })
                    }
                    else
                    {   
                        let q=new lang()
                        q.cat=tag
                        q.count++;
                        q.save().then((qe)=>{
                            let opt={
                                language:qe,
                                name:qe.cat
                            }
                            query.language.push(opt)
                            callback()
                        })

                    }
                }
            })
        },function(err){
            if(err)
            {
                console.log("SOME HTING WAS WRONG")
            }
            else
            {
                async.each(req.body.topic,function(tag,callback){
                    compan.findOne({cat:tag}).then((da,err)=>{
                        
                        console.log(err)
                        if(err)
                        {
                            callback(err)
                            return err;
                        }
                        else
                        {
                            if(da)
                            {
                                da.count++;
                                da.save().then(()=>{
                                    let opt={
                                        company:da,
                                        name:da.cat,
                                    }
                                    query.company.push(opt)
                                    callback()
                                })
                            }
                            else
                            {   
                                let q=new compan()
                                q.cat=tag
                                q.count=1;
                                q.save().then((qe)=>{
                                    let opt={
                                        company:qe,
                                        name:qe.cat
                                    }
                                    query.company.push(opt)
                                    callback()
                                })
        
                            }
                        }
                    })
                },function(err)
                {
                    query.save().then((das)=>{
                       console.log(das)  
                    }).then((q)=>{
                        res.status(200).json("DONE WITH POST");
                    })
                })
        
            }
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
        let us=await User.findOne({_id:req.user._id});
        let post=await question.findOne({_id:req.params.id})
        let po={
            text:req.body.text,
            name:us.name,
            user:req.user.id
        }
        post.comments.push(po)
        let p=await post.save();
       
        res.status(200).json(p);
    },
    getlang:async(req,res)=>{
        let q=await lang.find()
        res.status(200).json(q)
    },
    getcomp:async(req,res)=>{
        let q=await compan.find()
        res.status(200).json(q)
    },
    getl:async(req,res)=>{
        let q=await question.find({'language.language':req.params.id}).sort({createdAt:-1})

        res.status(200).json(q)
    },
    getc:async(req,res)=>{
        console.log(req.params)
        let q=await question.find({'company.company':req.params.id}).sort({createdAt:-1})
        res.status(200).json(q)
    },
    getdatacomp:async(req,res)=>{
        let data=await question.findOne({_id:req.params.id});
        console.log("!!!!!!!!!",data);
        res.status(200).json(data);
    },
    changedetails:async(req,res)=>{
        
        res.status(200).json(req.body)
    },
    getuser:async(req,res)=>{
        let data=await User.findOne({_id:req.user._id})
        console.log(data)
        res.status(200).json(data);
    },
changedetails:async(req,res)=>{
    
    const {error,isValid}=validateform(req.body);
    if(!isValid)
    {
        res.status(400).json(error)
    }
    else
    {
        let em=await User.findOne({email:req.body.email})
        if(em)
        {
res.status(400).json({already:"Email Already exits"})
        }
        else
        {
            let data=await User.findOne({_id:req.user._id});
            data.name=req.body.name;
            data.email=req.body.email;
            data.password=CommonController.hashpassword(req.body.password)
            data.college=req.body.college;
            data.currently=req.body.current;
            data.mobile=req.body.mobile;
            let d=await data.save();
            console.log(d)
            let q=await question.updateMany({'per.person':d._id},{$set:{'per.name':d.name}});
            console.log(q)
            res.status(200).json({success:"Saved Changes"})
        }
        
    }
    
}
}