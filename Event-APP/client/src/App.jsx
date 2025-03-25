import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [services, setServices] = useState(null);
  const [loading, setLoading] = useState(true);  

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/services');
      //console.log(response);
      //console.log(response.data);
      if (response.status === 200) {
        setServices(response.data); // Mise à jour des services reçus
      }
    } catch (err) {
      console.log(err); // Affichage de l'erreur en cas d'échec de la requête
    } finally {
      setLoading(false); // Mise à jour de l'état de loading
    }
  };

  useEffect(() => {
    fetchServices(); // Appel de la fonction fetchServices quand le composant est monté
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-sky-500/50 text-center py-4">Hello, this is my event APP</h1>

      {/* Affichage des services ou d'un message de chargement */}
      {loading ? (
        <p className="text-center text-lg">Loading...</p> // Affiche "Loading..." tant que les données sont en cours de chargement
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {/* Affichage des services dans des cartes */}
          {services && services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
                <p className="text-sm text-gray-600">{service.description}</p>
                <div className="mt-4">
                  <span className="block text-lg font-semibold text-gray-800">Price: ${service.prix}</span>
                  <span className="block text-sm text-gray-500">Category: {service.category}</span>
                  <span className="block text-sm text-gray-500">Location: {service.adresse}</span>
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

