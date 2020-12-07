const express = require("express");
const router = express.Router();

const {Usuario} = require("../model/usuario");

router.post("/", async(req, res)=>{
    let = usuario = await Usuario.findOne({correo: req.body.correo});

    if(usuario) return res.status(400).send("El usuario ya existe en la base de datos");

    usuario = new Usuario ({
        nombre: req.body.nombre,
        correo: req.body.correo,
        pass: req.body.pass,
    });

    const result = await usuario.save();
    const jwToken = usuario.generateJWT();
    res.status(200).send({jwToken})
});

module.exports = router;                