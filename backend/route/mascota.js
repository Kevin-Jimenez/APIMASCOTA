const express = require("express");
const router = express.Router();

const {Mascota} = require("../model/mascota");
const {Usuario} = require("../model/usuario");

const autentificacion = require("../middleware/autentificacion");
 
router.post("/",autentificacion, async(req, res)=>{
    const usuario = await Usuario.findById(req.usuario._id);

    if(!usuario) return res.status(400).send("El usuario no existe en la base de datos");

    const mascota = new Mascota ({
        idUsuario: usuario._id,
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        descripcion: req.body.descripcion,
    });
    const result = await mascota.save();
    res.status(200).send(result);
});

module.exports = router