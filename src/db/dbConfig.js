import mongoose from "mongoose";

const connectDB=async ()=>{
    try{
    const      uri=process.env.MONGO_URI ||    "mongo://localhost/mern-blog-db";

    await mongoose
    .connect(uri,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
    })
    .catch((error)=>console.log(error));
    const connection = mongoose.connection;
    console.log("mongodb is connected susccessfully")
    }catch(error){

        console.log(error);
        return error;

    }
}


export default connectDB;