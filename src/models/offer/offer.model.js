const mongoose = require("mongoose")

const OfferSchema = new mongoose.Schema({  
   
    id_categoria: {
        type: String,        
        required: true,        
    },
    id_proveedor: {
        type: String,        
        required: true,        
    },
    nombre_producto: {
        type: String,
        required: true,        
    },
    imagen: {
        type: String,        
        required: true,        
    },
    descripcion_oferta: {
        type: String,        
        required: true,        
    },
    precio: {
        type: String,        
        required: true,        
    },
    id_cliente: {
        type: String,        
        required: true,        
    },
    createdAt: { 
        type: Date, 
        default: Date.now
     }

})

module.exports = mongoose.model("Offer", OfferSchema)