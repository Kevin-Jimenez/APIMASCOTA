const express = require("express");
const router = express.Router();

const {Usuario} = require("../model/usuario");

router.post("/", async(req, res)=>{
    const usuario = await Usuario.findOne({correo: req.body.correo});

    if(!usuario) return res.status(400).send("Usuario o contraseña incorrectos");

    if(usuario.pass !== req.body.pass) return res.status(400).send("Usuario o contraseña incorrectos");

    const jwtToken = usuario.generateJWT();
    res.status(200).send({jwtToken});
})

module.exports = router;