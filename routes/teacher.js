import express from "express";
import auth from "../config/auth.js"
const teacher = express.Router();

teacher.get("/", auth, (req, res) => {
    res.send("teacher List");
})

export default teacher;