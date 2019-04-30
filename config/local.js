var passport=require('passport');
var local=require('passport-local');
var user=require('../schema/schema.js');

passport.serializeUser(function(user,done){
  done(null,user.id);
});
passport.deserializeUser(function(id,done){
  user.findById(id).then(function(user){
    done(null,user);
  })
});

passport.use(new local({
usernameField:'email',
passwordField:'pass'
},function(use,pass,done){

user.findOne({email:use}).then(function(us){

if(us)
{
if(us.pass==pass)
{
  return done(null,us);
}
else {
  return done(null,false,{message:"incorrect password"});
}

}
else {
  return done(null,false);
}


})







}));
