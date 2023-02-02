const express=require('express')
const studentRouter=require('../controller/student')
const mainRouter=express.Router()

mainRouter.get('/employee',studentRouter.getMongoose)
mainRouter.get('/employee1',studentRouter.getQuestion1Mongoose)
mainRouter.get('/employee2',studentRouter.getQuestion2Mongoose)
mainRouter.get('/employee3',studentRouter.getQuestion3Mongoose)

// mainRouter.post('/employee',studentRouter.insertOneMongoose)
mainRouter.post('/employee',studentRouter.insertManyMongoose)

mainRouter.put('/employee',studentRouter.updateMongoose)
mainRouter.delete('/employee',studentRouter.deleteMongoose)

module.exports=mainRouter;