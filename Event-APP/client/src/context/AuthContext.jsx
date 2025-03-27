//AuthContext : Ce contexte va gérer l'état d'authentification de l'utilisateur (par exemple, si l'utilisateur est connecté ou non).
import { useState, createContext } from 'react'
import axios from 'axios';
import {Navigate, useNavigate} from 'react-router'
import { useEffect } from 'react';

// Création du contexte pour l'authentification
export const AuthContext = createContext(null)

export const AuthController = ({ children }) => {
    let navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);
    
  

 //on peut passer des fonctions on la passe dans la value: il est déstructurer et l'appelle de cette facon {my_fonction ()}

    const handleLogin = async (e, email, password) => {
        //console.log(e);
        e.preventDefault();
     // Affiche les valeurs des champs dans la console
        //console.log('Email:', email);
        //console.log('Password:', password);
        //console.log('Login submitted');

        try{
         // Appel API
            const response = await axios.post('http://localhost:4000/api/login',{email, password})
            console.log (response);
                if (response.status === 200){
                localStorage.setItem('token',response.data.token);
                setIsAuthenticated(true)
                alert (response.data.message)
                navigate('/');
                }

        }catch (err) {
            console.log(err)
            alert.log(err.response.data.message);  // Gère l'erreur si la connexion échoue
        };
    };
     // Fonction pour gérer la déconnexion
     const handleLogout = () => {
        try{
            localStorage.removeItem('token');
            setIsAuthenticated(false);
            navigate('/');

        } catch (err){
            console.log(err);
        }
    };
    
    
    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated,handleLogin,handleLogout}}>
            {children}
        </AuthContext.Provider>
    )

}