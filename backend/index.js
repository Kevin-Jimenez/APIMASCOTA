const express = require("express");
const mongoose = require("mongoose");

const usuario = require("./route/usuario");
const autentificacion = require("./route/autentificacion");
const mascota = require("./route/mascota");

const app = express();
app.use(express.json());

app.use("/app/usuario", usuario);
app.use("/app/autentificacion", autentificacion);
app.use("app/mascota", mascota);

const port = process.env.PORT || 3010;
app.listen(port, ()=> console.log("Se esta ejecutando por el puerto: ", port,"..."));

mongoose.connect("mongodb://localhost/mascotasdb", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

.then(() => console.log("Conexion con mongo OK :)...."))
.catch(() => console.log("Conexion con mongo OFF :(..."));