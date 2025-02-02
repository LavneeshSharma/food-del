import mongoose from "mongoose";

export const connectdb=async()=>{
   await mongoose.connect('mongodb+srv://sharmalavneesh3:12345678%40ok@cluster0.daw2b.mongodb.net/Flavor-Haven').then(()=>console.log('Db connected'))
}