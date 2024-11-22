import mongoose from "mongoose";

const db = mongoose.connect("mongodb+srv://kavathiyameet7603:Kavathiya%405757@cluster0.rmjjh.mongodb.net/classmanagement")
    .then(() => console.log("database connected sucessfully ...."))
    .catch((err) => console.log("err", err))

export default db;