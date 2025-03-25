import { Router } from "express";
import { getAllServices, addService } from "../controllers/servicesController.js";
import authMiddleware from "../middellewars/authMiddleware.js";

const servicesRouter = Router ();

servicesRouter.get('/services', getAllServices) ;
servicesRouter.post ('/services', authMiddleware,addService);


export default servicesRouter;

