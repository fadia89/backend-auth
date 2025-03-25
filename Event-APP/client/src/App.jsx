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
      <h1 className="text-3xl font-bold underline bg-sky-500/50">Hello, this is my event APP</h1>

      {/* Affichage des services ou d'un message de chargement */}
      {loading ? (
        <p>Loading...</p> // Affiche "Loading..." tant que les données sont en cours de chargement
      ) : (
        <div>
          {/* Affichage des services, ici tu peux formater selon ton besoin */}
          {services && services.map((service, index) => (
            <div key={index}>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
