const { Employee } = require("../models/student");

const insertOneMongoose=async (req,res)=>{
const employeeData=req.body;
try {
    const employeeObj= new Employee({
        firstName:employeeData.firstName,
        lastName:employeeData.lastName,     
        salary: employeeData.salary,
        department: employeeData.department,
        lastCompany: employeeData.lastCompany,
        lastSalary: employeeData.lastSalary,
        overallExp: employeeData.overallExp,
        contactInfo: employeeData.contactInfo,
        yearGrad: employeeData.yearGrad,
        gradStream: employeeData.gradStream
    });
    const insertOneResponse=await employeeObj.save();
    res.status(200).send({success:insertOneResponse})
} catch (error) {
    console.log("error occured while saving the data=>",error)
    res.status(500).send({message:"something went wrong while inserting"})
}
}

const insertManyMongoose=async (req,res)=>{
    const employeeData=req.body;
    try {
        const employeeObj= employeeData.map((val)=>{
            return({
                firstName:val.firstName,
                lastName:val.lastName,     
                salary: val.salary,
                department: val.department,
                lastCompany: val.lastCompany,
                lastSalary: val.lastSalary,
                overallExp: val.overallExp,
                contactInfo: val.contactInfo,
                yearGrad: val.yearGrad,
                gradStream: val.gradStream
            }
          )
        })
        const insertManyResponse=await Employee.insertMany(employeeObj);
        // console.log("inserted data",insertManyResponse)
        res.status(200).send({success:insertManyResponse})
    } catch (error) {
        console.log("error occured while saving the data=>",error)
        res.status(500).send({message:"something went wrong while inserting"})
    }
    }

//read
const getMongoose=async(req,res)=>{
    const query=req.query;
    try {
        const getResponse=await Employee.find(query)
        res.status(200).send({success:getResponse})
    } catch (error) {
        console.log("error occured while read the data=>",error)
        res.status(500).send({message:"something went wrong while reading"}) 
    }
}

///read question one salary greater than 30000
const getQuestion1Mongoose=async(req,res)=>{
    const query={salary:{$gt:"30000"}};
    try {
        const getResponse=await Employee.find(query)
        res.status(200).send({success:getResponse})
    } catch (error) {
        console.log("error occured while read the data=>",error)
        res.status(500).send({message:"something went wrong while reading"}) 
    }
}

/////read question two overexp morethan 2
const getQuestion2Mongoose=async(req,res)=>{
    const query={overallExp:{$gt:"2"}};
    try {
        const getResponse=await Employee.find(query)
        res.status(200).send({success:getResponse})
    } catch (error) {
        console.log("error occured while read the data=>",error)
        res.status(500).send({message:"something went wrong while reading"}) 
    }
}

/////read question two overexp morethan 2
const getQuestion3Mongoose=async(req,res)=>{
    const query={yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}};
    try {
        const getResponse=await Employee.find(query)
        res.status(200).send({success:getResponse})
    } catch (error) {
        console.log("error occured while read the data=>",error)
        res.status(500).send({message:"something went wrong while reading"}) 
    }
}

const updateMongoose=async(req,res)=>{
    const filter=req.body.filter;
    const update=req.body.update;
    const employeeUpadte={
        $set:update
    }
    try {
        const updateResponse=await Employee.updateMany(filter,employeeUpadte)
        res.status(200).send({success:updateResponse})
    } catch (error) {
        console.log("error occured while update the data=>",error)
        res.status(500).send({message:"something went wrong while updating"}) 
    }
}

const deleteMongoose=async(req,res)=>{
    const query=req.query;
    try {
        const deleteResponse=await Employee.deleteMany(query)
        res.status(200).send({success:deleteResponse})
    } catch (error) {
        console.log("error occured while delete the data=>",error)
        res.status(500).send({message:"something went wrong while deleting"}) 
    }
}



module.exports={insertOneMongoose,insertManyMongoose,getMongoose,getQuestion1Mongoose,getQuestion2Mongoose,getQuestion3Mongoose,updateMongoose,deleteMongoose}