//ServicesContext: Ce contexte va gérer la récupération des services depuis une API et les partager globalement.

import {useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const ServicesContext = createContext(null)

export const ServicesController = ({children}) => {
  const [loading, setLoading] = useState(true)
  const [services, setServices] = useState(null)
  const [error, setError] = useState(null)
  
  const fetchServices = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/services`)
        if (response.status === 200) {
          setServices(response.data)
        }
      }
      catch (err) {
        console.log(err)
        setError("Error loading services");
      }
      finally {
        setLoading(false)
      }
    }
   
  
    useEffect(() => {
      fetchServices()
    }, [])
   
    return(
        <ServicesContext.Provider value={[services, setServices]}>
            {!loading && children}
        </ServicesContext.Provider>
    )
}