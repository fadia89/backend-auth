import { Router } from "express";
import verifyUser from "../middellewars/verifyUser.js";

 const eventRouter = Router()


eventRouter.get ('/events', verifyUser,(req,res) => {
  res.send ('welecom to my event')
 })

export default eventRouter;