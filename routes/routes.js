import express from "express";
import signUp from "./signup.js"
import signIn from "./signIn.js"
import principal from "./principal.js"
import teacher from './teacher.js'
const routes = express.Router();

routes.use("/signUp", signUp)
routes.use("/signIn", signIn)
routes.use("/principal", principal)
routes.use("/teacher",teacher)

export default routes