var express=require('express');
var route=express.Router();
var ques=require('../schema/ques.js');
var body=require('body-parser');
var ques=require('../schema/ques.js');
var url=body.urlencoded({extended:false});
var user=require('../schema/schema');
var path=require('path');
var jsonParser = body.json()
var moment=require('moment')
var authen=function(req,res,next){

if(req.user)
{
  console.log('come here');
  next();
}
else {
  res.redirect('/login')
}
}

route.get('/user',authen,url,function(req,res){
  res.redirect('/users/'+req.user.Eid);

});

route.get('/users/:id',authen,url,function(req,res)
{
  if(req.params.id==req.user.id)
  {
    ques.find({}).sort({time:-1}).then((da)=>{
      res.render('feedjiit',{sign:req.user,ques:da})
    })
  }
  else
  {
    user.findOne({Eid:req.params.id}).then(function(use)
    {
    ques.find({ans:req.params.id}).then(function(que)
    {
    res.render('feedjiit',{sign:use,ques:que})
    })
    })
  }

})

route.get('/project/:id',(req,res)=>{
  ques.findOne({qid:req.params.id}).then((da)=>{
    res.render('projectjiit',{ques:da})
  })
})
route.get('/submitproject',(req,res)=>{
  res.render('projectsubmit')
})

route.get('/ans',url,function(req,res)
{
res.send(req.session)
});
route.post('/postques',url,function(req,res){
console.log(req.body)
/*
user.findOne({Eid:req.body.id}).then((da)=>{

  var que=new ques()
  que.topic=req.body.question;
  que.ask=da.name;
  que.qid=Math.floor(Math.random()*10000000)
  que.ans=da.Eid;
  que.content=req.body.content;
    que.upvotes=null;
    que.downvote=null;
    que.ansby=da.name;
  que.time=new Date();
  que.save().then(function(e){
    console.log(e)
    res.redirect('/user');
  });

})
*/


});

route.get('/ansques/:ques',url,function(req,res){
res.render('ansques',{ques:req.params.ques});
});
route.get('/profile/:id',url,function(req,res){
res.render('profile',{user:req.user});
})
route.post('/correctans',function(req,res){
  new ques({
    ques:req.body.question,

  })
});

route.post('/ansdone',url,function(req,res){

ques.findOne({ques:req.body.ques}).then(function(que){
console.log(que)
 que.anser.push({upvote:[],downvote:[],cont:req.body.ans,aid:Math.floor(Math.random()*1000000),per:req.user.Eid,name:req.user.name,time:Date.now()})
  que.save();

})
})

route.post('/postimg',function(req,res){
user.findOne({_id:req.user._id}).then(function(use){
  upload(req,res,function(err){
    if(err)
    {
      res.render('log',{msg:err});
    }
    else {
  use.img=req.file.path;
  use.save();
    }
  });




});


});


route.post('/doupvote',jsonParser,function(req,res){
  console.log("here");
ques.findOne({qid:req.body.project}).then(function(data){
  var p=0;
  var check=0;
  var comm='';


  for(q=0;q<data.downvote.length;q++)
  {
    if(req.body.client==data.downvote[q])
    {
      check=1;
      break;

    }
  }
  if(check==1)
  {
    comm="cannot do upvote and downvote";
      res.send({data,comm})
  }
  else
  {
    for(q=0;q<data.upvote.length;q++)
    {
       if (req.body.client == data.upvote[q]) {
          p = 1;
          data.upvote.pop(req.body.client);
          data.save();
          console.log("already present");
          break;

    }
  }

  if(p==0)
  { data.upvote.push(req.body.client);
      data.save();
  }
res.send({comm,data});
}

});
})


route.post('/dodownvote',jsonParser,function(req,res){
    ques.findOne({qid:req.body.project}).then(function(data){
        var p=0;
        var check=0;
        var comm='';


        for(q=0;q<data.upvote.length;q++)
        {
            if(req.body.client==data.upvote[q])
            {
                check=1;
                break;

            }
        }
        if(check==1)
        {
            comm="cannot do upvote and downvote";
            res.send({data,comm})
        }
        else
        {
            for(q=0;q<data.downvote.length;q++)
            {
                if (req.body.client == data.downvote[q]) {
                    p = 1;
                    data.downvote.pop(req.body.client);
                    data.save();
                    console.log("already present");
                    break;

                }
            }

            if(p==0)
            { data.downvote.push(req.body.client);
                data.save();
            }
            res.send({comm,data});
        }

    });
})


route.post('/upcomment',jsonParser,function (req,res) {
  ques.findOne({qid:req.body.ques}).then(function(ques){


    var p=0;

    for(var q=0;q!=ques.anser.length;q++)
    {
      if(req.body.ans==ques.anser[q].aid)
      {
        for(var z=0;z!=ques.anser[q].downvote.length;z++)
        {
          if(user==ques.anser[q].downvote[z])
          {
            p=1;
            break;

          }
        }

        if(p!=1)
        {
            var check=0;

          for(var z=0;z!=ques.anser[q].upvote.length;z++)
          {
            if(req.body.user==ques.anser[q].upvote[z])
            {
              check=1;
              ques.anser[q].upvote.pop(req.body.user);
              ques.save();
              break;
            }
          }

          if(check==0)
          {
           ques.anser[q].upvote.push(req.body.user);
            ques.save();


          }

        }
        res.send(ques);

        break;
      }
    }

  })

})




route.post('/downcomment',jsonParser,function(req,res){


    ques.findOne({qid:req.body.ques}).then(function(ques){


        var p=0;

        for(var q=0;q!=ques.anser.length;q++)
        {
            if(req.body.ans==ques.anser[q].aid)
            {
                for(var z=0;z!=ques.anser[q].upvote.length;z++)
                {
                    if(user==ques.anser[q].upvote[z])
                    {
                        p=1;
                        break;

                    }
                }

                if(p!=1)
                {
                    var check=0;

                    for(var z=0;z!=ques.anser[q].downvote.length;z++)
                    {
                        if(req.body.user==ques.anser[q].downvote[z])
                        {
                            check=1;
                            ques.anser[q].downvote.pop(req.body.user);
                            ques.save();
                            break;
                        }
                    }

                    if(check==0)
                    {
                        ques.anser[q].downvote.push(req.body.user);
                        ques.save();


                    }

                }
                res.send(ques);

                break;
            }
        }

    })
});


route.get('/profile',url,function(req,res){

    res.render("update",{sign:req.user});
});

route.post('/updatename',jsonParser,function(req,res){

    user.findOne({Eid:req.user.Eid}).then(function(user){
        user.name=req.body.name;
        user.save();
        res.send(user.name);
    })
});


route.post('/updatecounty',jsonParser,function(req,res){

    user.findOne({Eid:req.user.Eid}).then(function(user){
            user.country=req.body.country;
        user.save();
        res.send(user.country);
    })
});


route.post('/updatephn',jsonParser,function(req,res){
    user.findOne({Eid:req.user.Eid}).then(function(user){
    user.mobile=req.body.phone;
    user.save();
    res.send(user.phone);
})
});

route.get('/vie',function(req,res){
    res.render('test');
})

route.get('/Sports',function(req,res){
  ques.find({'category':'Sports'}).then(function(da){
  res.render('sports',{ques:da,sign:req.user})
  })
});

route.get('/Education',function(req,res){
  ques.find({'category':'Education'}).then(function(da){
  res.render('education',{ques:da,sign:req.user})
  })
})


module.exports=route;
