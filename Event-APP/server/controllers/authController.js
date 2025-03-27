import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import User from'../models/users.js';

 const JWT_SECRET = process.env.JWT_SECRET;

export  const createUser = async (req, res) => {
    const {first_Name, last_Name, email, password} = req.body;
        try{ 
            const emailVerification = await User.findOne({ email });
      
            if (emailVerification) {
            return res.status(409).json('Email already taken');
            }
      
            const salt =  await bcrypt.genSalt(10) // salt (une série de caractére) pour plus de complexité et sécurité pour le mot de passe
            const hashedPassword = await bcrypt.hash(password, salt)
         
            const newUser = await new User ({
              first_Name,
              last_Name,
              email,
              password: hashedPassword
            });
            newUser.save();
            return res.status(201).json({message: `Welcom ${first_Name}`});
         
        }catch (err) {
            console.log(err);  
            return res.status(500).json({ message: 'Internal server error' }); 
        }

};

export const loginUser = async (req,res) => {
    const {email, password} = req.body;
    //console.log(req.body);
   
    try{
       // Vérifier si l'utilisateur existe avec cet email
      const user= await User.findOne({email});
      if (!user){
        return res.status(401).json({ message: 'Email or password invalid' });  
      }
      
       // Comparer les mots de passe
      const comparePassword = await bcrypt.compare (password, user.password);
      if (!comparePassword){
        return res.status(401).json({ message: 'Email or password invalid' });  
      }
      console.log (comparePassword);
         // Si tout est correct, générer le token JWT
         const token = await jwt.sign({ id: user._id }, JWT_SECRET);
        // bien choisir l'info a l'interieur de Token 
        return res.status(200).json({ message: `Welcome ${user.first_Name}`, token });
  
  
    }catch (err) {
    console.log(err);  
    return res.status(500).json({ message: 'Internal server error' }); 
  }
};


