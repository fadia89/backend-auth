import { Router } from "express";
import { getAllServices, addService, getServiceByID, deleteServiceByID, updateService } from "../controllers/servicesController.js";
import verifyUser from "../middellewars/verifyUser.js";

const servicesRouter = Router ();

servicesRouter.get('/services', getAllServices, getServiceByID) ;

servicesRouter.post ('/services', verifyUser,addService);

servicesRouter.get('/services/:id', getServiceByID) ;

servicesRouter.delete('/services/:id', deleteServiceByID ) ;

servicesRouter.put('/services/:id', updateService) ;



export default servicesRouter;

