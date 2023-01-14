const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let usuarioSchema = new Schema({
  nombres: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  correo_electronico: {
    type: String,
    required: true,
  },
  confirmacion_correo: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  confirmacion_contraseña: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  ciudad: {
    type: String,
    required: true,
  },
  celular: {
    type: Number,
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  }
}, {
    collection: 'usuarios'
  })
module.exports = mongoose.model('Usuario', usuarioSchema)