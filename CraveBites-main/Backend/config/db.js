import  mongoose  from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://Hrushi:8074@cluster0.weqkx.mongodb.net/Project-0').then(()=>console.log("DB Connected"));
}