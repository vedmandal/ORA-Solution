import mongoose from "mongoose";

const ConnectDb=async()=>{
    try {
        const data =await mongoose.connect(process.env.MONGO_URL,{family:4})

        console.log(`database connected ${data.connection.host}`)
        
    } catch (error) {
        console.log(`error in database connecting ${error}`)
        process.exit(1);
        
    }

}

export default ConnectDb