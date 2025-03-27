import express from 'express'
import connectDB from './dataBase/db.js';
import authRouter from './routes/authRouter.js';
import eventRouter from './routes/events.js';
import cors from 'cors';
import servicesRouter from './routes/services.js';
import authMiddleware from './middellewars/verifyUser.js';
import userRouter from './routes/users.js';



const app = express();
const PORT= process.env.PORT || 4000


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors ());

app.use('/api', authRouter, eventRouter , servicesRouter, userRouter)

app.get('/',  (req,res)=>{
  res.send('Welcom to my event API')
})






connectDB();


app.listen(PORT, () => {
    console.log(`Bonjour, bienvenue sur mon serveur Express! ${PORT}`);
  });