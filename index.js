import express from 'express'
import connectDB from './dataBase/db.js';
import authRouter from './routes/authRouter.js';
import eventRouter from './routes/events.js';


const app = express();
const PORT= process.env.PORT || 4000


app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api', authRouter, eventRouter)






connectDB();


app.listen(PORT, () => {
    console.log(`Bonjour, bienvenue sur mon serveur Express! ${PORT}`);
  });