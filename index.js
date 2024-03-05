import express from 'express';
import 'dotenv/config'; // permite procesar variables de entorno
import cors from 'cors';
import morgan from 'morgan';
//1 - configurar un puerto
const app = express();

app.set('port', process.env.PORT || 4000 );
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+ app.get('port'))
})
//2 - configurar los middlewares
app.use(cors()); // permite obtener conexiones remotas
app.use(morgan('dev'))// nos da info extra en la terminal
//todo: agregar el resto de los middlewares

//3 - configurar las rutas
//http://localhost:3000/productos
app.get('/', (req, res)=>{
    //agregar toda la logica
    console.log('procesando una solicitud get');
    res.send('Respuesta del backend rollingcoffee')
})