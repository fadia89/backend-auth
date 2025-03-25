import Service from '../models/service.js';

export const getAllServices = async (req, res) => {
    try {
        
        const services = await Service.find();

        
        if (services.length < 1) {
            return res.status(404).json('Services not found');
        }
        return res.status(200).json(services);  
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' }); 
    }
};



export const addService = async (req, res) => {
    console.log (req.body)
     const {title,description,prix,category,adresse,availability, userId} = req.body
    try {
        // Log les informations de la requête pour le debug
       
        console.log(req.user);

        
       const newService = await Service.create(req.body);
        return res.status(201).json(newService);
    } catch (err) {
        console.log(err);  
   
        return res.status(500).json({ message: 'Internal server error' });
    }
};
