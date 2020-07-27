const express= require('express');
const path= require('path');
const app = express();
const morgan=require('morgan');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Makrosoft',{ useNewUrlParser: true,useUnifiedTopology: true })//conectar desde el modulo mongoose con mongo DB
.then(db => console.log('conexión exitosa')) //mensajes de conexión (promesa de conexión)
.catch(err => console.log(err));


app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views') );
app.set('view engine', 'ejs');

const indexRoutes= require('./routes/index');
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use('/', indexRoutes);
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});