const express=require('express')
const route=express.Router()
const auth=require('./auth.js');
const profile=require('./profile.js')
route.use('/auth',auth)
route.use('/profile',profile)
route.get('/',(req,res)=>{
res.json("RUNNING")
})


module.exports=route;