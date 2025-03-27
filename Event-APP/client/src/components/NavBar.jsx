import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ServicesContext } from '../context/servicesContext.jsx';
import { AuthContext } from '../context/authContext.jsx';
import { FaHome, FaUser, FaSignInAlt, FaSignOutAlt, FaUserPlus } from 'react-icons/fa'; // Import des icônes

const NavBar = () => {
    const [services, setServices] = useContext(ServicesContext);
    const { isAuthenticated, setIsAuthenticated ,handleLogout } = useContext(AuthContext);

    return (
        <div className="bg-gray-800 text-white py-4">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-2xl font-semibold text-center mb-4">Hello! There are {services.length} events</h1>
                <ul className="flex justify-center space-x-8">
                    <li>
                        <Link to="/" className="flex items-center space-x-2 hover:text-blue-400">
                            <FaHome size={20} />
                            <span>Home</span>
                        </Link>
                    </li>
                    {!isAuthenticated ? (
                        <>
                            <li>
                                <Link to="/register" className="flex items-center space-x-2 hover:text-blue-400">
                                    <FaUserPlus size={20} />
                                    <span>Register</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="flex items-center space-x-2 hover:text-blue-400">
                                    <FaSignInAlt size={20} />
                                    <span>Login</span>
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/profile" className="flex items-center space-x-2 hover:text-blue-400">
                                    <FaUser size={20} />
                                    <span>Profile</span>
                                </Link>
                            </li>
                            {/* Logout button */}
                            <li>
                                <button
                                    onClick={handleLogout}  // On appelle handleLogout au clic
                                    className="flex items-center space-x-2 text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded"
                                >
                                    <FaSignOutAlt size={20} />
                                    <span>Logout</span>
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
