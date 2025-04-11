const exp = require('express');
const app = exp();

app.use(exp.json());
const cors=require('cors')
app.use(cors())
require('dotenv').config();
const emailApp=require('./emailApp')
const port = process.env.PORT || 4000;

const mongoose=require('mongoose')

mongoose.connect(process.env.DBURL)
.then(()=>{
    app.listen(port,()=>{
        console.log(`server runnig on ${port}`)
        console.log("DB Success")
    })
})
.catch((err)=>{
    console.log(err)
})
app.use('/email-api',emailApp)

