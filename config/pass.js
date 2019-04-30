var passport=require('passport');
var google=require('passport-google-oauth20');
var user=require('../schema/schema.js');

passport.serializeUser(function(user,done){
  done(null,user.id);
});
passport.deserializeUser(function(id,done){
  user.findById(id).then(function(user){
    done(null,user);
  })
});

passport.use(new google({
callbackURL:'/google/redirect',
clientID:"689129197835-c4pbv26uaf7frkar6uf59egk7otled3u.apps.googleusercontent.com",
clientSecret:"nXxzgcLovkF1jxQ-fVlSND62"
},function(ac,ref,por,done){
  user.findOne({Eid:por.id}).then(function(use){
    if(use)
    {
     user.findOne({Eid:use.Eid}).then(function(use){
         use.lastl=Date.now();
        use.save();
     })
      done(null,use);
    }
    else {
            new user({
                  name:por.displayName,
                  Eid:por.id,
                    date:{dd:null,mm:null,yy:null},
                    school:'',
                college:'',
                currently:'',
                country:'',
                mobile:'',
                pic:''
                }).save().then(function(use){
                    user.findOne({Eid:use.Eid}).then(function(us){
                        us.lastl=Date.now();
                    })
                  done(null,use);
                });

    }
  })
}));
