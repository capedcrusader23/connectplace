const express=require('express')
const route=express();
const passport=require('passport')
const body=require('body-parser')
const url=body.urlencoded({extended:false})
const profilecontroller=require('../controller/profilecontroller.js')
route.post('/postquery',url,passport.authenticate('jwt',{session:false}),profilecontroller.postquery)
route.get('/profile/:id',passport.authenticate('jwt',{session:false}),profilecontroller.fetchprofile)
route.get('/landing',passport.authenticate('jwt',{session:false}),profilecontroller.landing)
module.exports=route;