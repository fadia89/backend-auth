import { Router } from "express";
import { getAllUsers, getUserProfile } from "../controllers/usersController.js";
import verifyUser from "../middellewars/verifyUser.js";


const userRouter = Router();

userRouter.get('/profile',verifyUser,getUserProfile);

userRouter.get ('/users',getAllUsers);

export default userRouter