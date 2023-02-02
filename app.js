const express=require('express')
const constants=require('./config/constants')
const app=express();
const bodyParser=require('body-parser')
const studentRouter=require('./pages/student')

const connect=require('./database/mongoose')

app.use(bodyParser.json())
app.use(studentRouter)

app.get('/handson3',function(req,res){
    res.send({message:"iam working on handson3"})
})
app.listen(constants.PORT,async()=>{
    console.log(`server running at ${constants.PORT}`)
    console.log('running the database connection')
    await connect();
})