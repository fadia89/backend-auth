//AuthContext : Ce contexte va gérer l'état d'authentification de l'utilisateur (par exemple, si l'utilisateur est connecté ou non).
import { useState, createContext } from 'react'


export const AuthContext = createContext(null)


export const AuthController = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )

}