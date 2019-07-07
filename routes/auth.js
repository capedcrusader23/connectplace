const express=require('express')
const route=express.Router();
const body=require('body-parser')
const url=body.urlencoded({extended:false})
const authcontroller=require('../controller/authController.js')
const passport=require('passport')
route.post('/register',url,authcontroller.register)
route.post('/login',url,authcontroller.login)
route.get('/check',passport.authenticate('jwt',{session:false}),(req,res)=>{
    console.log(req.user)
})
module.exports=route