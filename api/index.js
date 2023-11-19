const express = require('express');
var cors = require('cors')
const routerApi = require('./routes');
//middlewares
const {logError, handlerError, boomHandlerError} = require('./middlewares/middleware.error')
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())


const corsOptions = {
  origin: 'http://mi-frontend.com', // Reemplaza con la URL de tu frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Habilita las credenciales de cookies
  optionsSuccessStatus: 204, // Establece el código de estado para las solicitudes OPTIONS sin cuerpo (sin preflight)
};
app.use(cors(corsOptions));
routerApi(app);
//middleware de error
app.use(logError);
app.use(boomHandlerError);
app.use(handlerError);


app.listen(port,()=>{
  console.log(`listening on port ${port}`);
})
