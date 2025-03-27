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

export const getServiceByID = async (req,res) => {
    const {id} = req.params;
    
    try{
        const serviceById = await Service.findById(id);
        if(!serviceById){
            return res.status(404).json({message: 'Service not found'});
        }
        return res.status(200).json(serviceById);

    } catch (err){
        console.log(err);
        return res.status(500).json({message: 'Internal server error'});
    }
};

export const deleteServiceByID = async (req, res) => {
    const {id} = req.params;
    
    try{
        const serviceByID = await Service.findByIdAndDelete(id);
        if (!serviceByID){
            return res.status(404).json('Service not found');
        }
        return res.status(200).json({message: 'Service successfully deleted'})

    } catch (err) {
        console.log(err);
        return res.status(500).json({message: 'Internal server error'});
    }

};

export const updateService = async (req,res) => {
    const {id} = req.params;
    const { title, description, prix,category,adresse, availability, userId} = req.body;
    try {
        const serviceByID = await Service.findByIdAndUpdate(id,req.body,{new: true});
        console.log(serviceByID);
        if(!serviceByID){
            return res.status(404).json('Service not found')
        }
        return res.json(serviceByID);

    }catch (err) {
        console.log(err);
        return res.status(500).json({message: 'Internal server error'});
    }

};
