const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let envioSchema = new Schema({
    codigo:{
        tipe:Number,
        required:true,
    },
    fecha:{
        tipe:Date,
        TimeStamp:true,
        versionKey:false,
    },  
    jornada:{
        tipe:String,
        required:false,
    },
    ancho:{
        tipe:Number,
        required:true,
    },
   alto:{
        tipe:Number,
        required:true,
    },
    largo:{
        tipe:Number,
        required:true,
    },
    peso:{
        tipe:Number,
        required:true,
    },
    valor:{
        tipe:Number,
        required:true,
    },
    forma_pago:{
        tipe:string,
        required:true,
    },
    estado:{
        tipe:String,
        required:true,
    },
    remitente:{
        tipe:String,
        required:true,
    },
    destinatario:{
        tipe:String,
        required:true,
    }
}, {
    collection: 'envios'
})
module.exports = mongoose.model('Envio', envioSchema)