//definir modulos internos

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const esquemaUsuario = new mongoose.Schema({
    nombre: String,
    correo: String,
    pass: String
});

esquemaUsuario.methods.generateJWT = function(){
    return jwt.sign({
        _id: this.id,
        nombre: this.nombre,
        correo: this.correo,
    }, "clave")
}

const Usuario = mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario = Usuario;
module.exports.esquemaUsuario = esquemaUsuario;