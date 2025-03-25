
import { Link } from 'react-router-dom'; // Importation correcte de Link

const NavBar = () => {
  return (
    <nav>
      <ul className="grid grid-cols-4   justify-self-auto mx-8 ">
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/profile">Profile</Link> 
        </li>
        <li>
          <Link to="/contact">Contact</Link> 
        </li>
        <li>
          <Link to="/register">S'inscrire</Link> 
        </li>
        

      </ul>
    </nav>
  );
};

export default NavBar;
