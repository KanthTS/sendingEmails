const nodemailer=require('nodemailer')
const emailModel=require('./emailModel')
const exp=require('express')
const emailApp=exp.Router()
require('dotenv').config()
emailApp.post('/send',async(req,res)=>{
    const {to,subject,message}=req.body;
    let transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.user,
            pass:process.env.pass
        },
    });
    let mailOptions={
        from:process.env.user,
        to:to,
        subject:subject,
        text:message,
    }
  try{
     await transporter.sendMail(mailOptions);
     
     const saved=new emailModel({to,subject,message})
     const result=await saved.save()
     res.status(200).json({message:"email sent",payload:result})
  }
  catch(err){
    res.status(400).json({message:"error",err})
  }

})
module.exports=emailApp;