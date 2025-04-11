const mongoose=require('mongoose')
const emailSchema=new mongoose.Schema({

    to:String,
    subject:String,
    message:String
},{'strict':'throw'})

const emailModel=mongoose.model('mails',emailSchema)
module.exports=emailModel;