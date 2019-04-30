var express=require('express');
var app=express();
var route=require('./route/route.js')
var passpor=require('./config/pass.js')
var mongoose=require('mongoose');
var cookie=require('cookie-session');
var passport=require('passport');
var pro=require('./route/profile.js');
 var pars=require('cookie-parser');
const session = require('express-session');
var check=require('express-validator');
var pp2=require('./config/local.js');
var mul=require('multer');
var path=require('path');
var method=require('method-override');
var crypto=require('crypto');
var gridfs=require('multer-gridfs-storage')
var grid=require('gridfs-stream')
var fs=require('fs');
var multiparty=require('connect-multiparty');
app.use(express.static('views'));
app.use(method('_method'));

var user=require('./schema/schema.js');



app.use(express.static(__dirname + '/public'));
app.use(cookie({
  maxAge:24*60*60*1000,
  keys:['CAPEDCRUSADER']
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://Uphaar:uphaar@ds131800.mlab.com:31800/connetify').then(function(da){
    console.log(da);
});

var db=mongoose.connection;
console.log(db)
let gfs;

db.once('open',function(){
    gfs=grid(db.db,mongoose.mongo)

});


var storage=new gridfs({
    url:'mongodb://Uphaar:uphaar@ds131800.mlab.com:31800/connetify',
    filename:function(req,file,cb) {
        cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
    },
    file:function(er,file){
        return {
            metadata:'user'
        }
    }

});

const upload=mul({
    storage:storage
    /*fileFilter:function(req,file,cb){
        var type='/jpeg|jpg|png|gif/';
        var extname=type.test(path.extname(file.originalname).toLowerCase());
        var mime=type.test(file.mimeType);

        if(extname&&mime)
        {
            cb(null,true);
        }
        else
        {
            cb("images only");
        }
    }*/
}).single('file');

app.set("view engine","ejs");
app.use(check());
app.use(route);
app.use(pro);


app.post('/upload',function(req,res){
    upload(req,res,function(er){
        if(er)
        {
            console.log(er);
        }
        else {
            console.log(req.file);
            var k = req.file;
            var q = gfs.createWriteStream({filename: k.filename});

            user.findOne({Eid:req.user.Eid}).then(function(use){

                use.pic=q.options.filename;
                use.save();

            });



        }
    })
});

app.get('/file/:id',function(req,res){
    gfs.files.findOne({filename:req.params.id},function(err,file){
        if(err)
        {
            console.log("no files found");
        }
        else
            {
                console.log(file);
            if(file.contentType==='image/jpeg'||file.contentType==='image/png')
            {

                var read=gfs.createReadStream(file._id);
                read.pipe(res);
            }
        }
    })
});

app.get('/ch2',function(reqr,res){
  res.render('uph')
})

app.listen(1111,function(req,res){
console.log("Running");
});
