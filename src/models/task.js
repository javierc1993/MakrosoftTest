const mongoose = require('mongoose');
const Schema = mongoose.Schema;//propiedad que nos permite definir como van a lucir los datos

const TaskSchema= new Schema({ //aqui van los campos que tendra cada tarea "columnas de las tablas"
   
    username: String,
    money: Number,
    status: {type:Boolean, default:false},
    fecha: Date
});
module.exports = mongoose.model('cursosmpocv2', TaskSchema); //aqui exporto el esquema a un metodo de moongose llamado model para que tome ese esquema y utilizarlo para guardar datos en una colección de objtos llamada task 