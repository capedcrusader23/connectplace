
const JwtStrategy=require('passport-jwt').Strategy
const ExtractJwt=require('passport-jwt').ExtractJwt
const {secret}=require('./keys.js')
const mongoose=require('mongoose')
const User=require('../models/user.js')

const opts={};
opts.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey=secret;
module.exports=passport=>{
  passport.use(new JwtStrategy(opts,(payload,done)=>{
    User.findById(payload.id).then((use)=>{
      if(use)
      {
        return done(null,use)
      }
      return done(null,false)
    }).catch(err=>console.log(err))
  }))
}
