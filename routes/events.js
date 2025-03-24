import { Router } from "express";
import authMiddleware from "../middellewars/authMiddleware.js";

 const eventRouter = Router()


eventRouter.get ('/events', authMiddleware ,(req,res) => {
  res.send ('welecom to my event')
 })

export default eventRouter;