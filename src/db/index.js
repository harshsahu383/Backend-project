import mongoose  from "mongoose";
 const  connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connection Successful");
    } catch (error) {
        console.log("Something went wromg" , error);
        process.exit(1);
        
    }
};
export default connectDb ;