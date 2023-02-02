const mongoose=require('mongoose')
// const url="mongodb://127.0.0.1:27017/humanResourse";
const url="mongodb+srv://RamanaKorada:RamanaKorada@cluster0.0j4affb.mongodb.net/humanResourse?retryWrites=true&w=majority";

const connect=async()=>{
    try {
        const client=await mongoose.connect(url)
        console.log("connected to db successfull")
        return client;

    } catch (error) {
        console.log("error in connection via mongoose")
    }
}
module.exports=connect;

