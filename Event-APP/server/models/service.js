import mongoose from "mongoose";
const { Schema} = mongoose;

const serviceSchema = new Schema ({
    title : {
        type: String,
        required: true
    },
    description :{
        type: String,
        required: true
    },
    prix:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    adresse :{
        type: String ,
        required: true
    },
    availability :  {
        type: Boolean,
        required: true
    },
    userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

})
export default mongoose.model('Service', serviceSchema);