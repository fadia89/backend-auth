import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  

const Register = () => {
    let navigate = useNavigate(); 
    const [first_Name, setFirst_Name] = useState('');
    const [last_Name, setLast_Name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Fonction de soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Appel API
            const newUser = await axios.post('http://localhost:4000/api/register', {first_Name, last_Name, email, password});
            //console.log(newUser);  
           
            // Vérifie si la création est réussie
            if (newUser.status === 201) {
                //alert("User created successfully!");
                alert(newUser.data);  // Affiche la réponse de l'API// le message dans le server
                navigate('/'); // Redirige vers la page d'accueil après l'inscription
            }
        } catch (err) {
            console.log(err);  

            // Vérifie si err.response existe et contient des données
            if (err.response) {
                console.log('Erreur côté serveur :', err.response.data);  // Afficher la réponse de l'erreur serveur
                alert(`Erreur: ${err.response.data}`);  // Afficher le message d'erreur détaillé
            } else {
                alert("Une erreur inconnue est survenue. Veuillez réessayer plus tard.");
            }
        }
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                    Register a new account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                    {/* First Name Field */}
                    <div>
                        <label htmlFor="first_Name" className="block text-sm font-medium text-gray-900">
                            First name
                        </label>
                        <div className="mt-2">
                            <input
                                id="firs_tName"
                                name="first_Name"
                                type="text"
                                required
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                onChange={(e) => setFirst_Name(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Last Name Field */}
                    <div>
                        <label htmlFor="last_Name" className="block text-sm font-medium text-gray-900">
                            Last name
                        </label>
                        <div className="mt-2">
                            <input
                                id="last_Name"
                                name="last_Name"
                                type="text"
                                required
                                autoComplete="family-name"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                onChange={(e) => setLast_Name(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="new-password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Register Button */}
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Register
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already a member?{' '}
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Please sign in
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
