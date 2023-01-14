let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

let usuarioSchema = require('../models/Usuario');

//CRUD

//Create
//localhost:5000/usuarios/create
router.route('/create').post((req, res, next) => {
    console.log(req.body)
    usuarioSchema.create(req.body, (error, data) => { 
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read Usuarios
//localhost:5000/usuario/
router.route('/').get((req, res) =>{
    usuarioSchema.find((error, data)=> {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read Usuarios
//localhost:5000/usuario/edit/1
router.route('/:id').get((req, res) => {
    usuarioSchema.findById(req.params.id,(error, data)=> {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update usuarios
//localhost:5000/usuario/edit/2
router.route('edit/:id').put((req, res,next) => {
    usuarioSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body,
    },  
    (error, data)=> {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Delete usuario
//localhost:5000/users/delete/2
router.route('delete/:id').delete((req, res, next) => {
    usuarioSchema.findByIdAndRemove(req.params.id,(error, data)=> {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                message: data
            })
        }
    })
})

module.exports =router