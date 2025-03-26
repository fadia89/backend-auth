import './App.css';
import { useContext, useState } from 'react';
import { ServicesContext } from './context/servicesContext';


function App() {
  const [services, setServices] = useContext (ServicesContext)
  //console.log(ServicesContext)
 
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-sky-500/50 text-center py-4">Hello, this is my event APP</h1>

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

