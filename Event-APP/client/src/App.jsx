import './App.css';
import { useContext } from 'react';
import { ServicesContext } from './context/servicesContext';
import { FaMoneyBill, FaTags, FaMapMarkerAlt } from 'react-icons/fa'; // Import des icônes
import axios from 'axios';

function App() {
  const [services, setServices] = useContext(ServicesContext);


  const fechAPI = async () => {
    try{
      const reponse = axios.get('http://localhost:4000/api/login',{
        headers: {
          'Authorization' : `bearer ${localStorage.getItem ('token')}`
        }
      })

    }catch (err){

    }
  }







  return (
    <>
      <h1 className="text-3xl font-bold underline bg-gray-200 text-center py-4">Hello, this is my event APP</h1>

      {/* Affichage des services ou d'un message de chargement */}
      {services === null ? (
        <p className="text-center text-lg">Loading...</p> // Affiche "Loading..." tant que les données sont en cours de chargement
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {/* Affichage des services dans des cartes */}
          {services && services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
                <p className="text-sm text-gray-600">{service.description}</p>
                <div className="mt-4 space-y-2">
                  {/* Affichage du prix avec une icône */}
                  <div className="flex items-center space-x-2">
                    <FaMoneyBill size={20} className="text-green-500" />
                    <span className="text-lg font-semibold text-gray-800">Price: ${service.prix}</span>
                  </div>
                  {/* Affichage de la catégorie avec une icône */}
                  <div className="flex items-center space-x-2">
                    <FaTags size={20} className="text-yellow-500" />
                    <span className="text-sm text-gray-500">Category: {service.category}</span>
                  </div>
                  {/* Affichage de l'adresse avec une icône */}
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt size={20} className="text-red-500" />
                    <span className="text-sm text-gray-500">Location: {service.adresse}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;


