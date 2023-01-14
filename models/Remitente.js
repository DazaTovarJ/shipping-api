const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let remitenteSchema = new Schema({
    nombres_apellidos: {
        type: String,
        required: true,
    },
    tipo_identificacion: {
        type: String,
        required: true,
    },
    identificacion: {
        type: Number,
        required: true,
    },
    ciudad: {
        type: String,
        required: true,
    },
    direrccion: {
        type: String,
        required: true,
    },
    telefonos: {
        type: Number,
        required: true,
      }
}, {
        collection: 'remitentes'       
})
module.exports = mongoose.model('Remitente', remitenteSchema)


