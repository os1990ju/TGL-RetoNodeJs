const express = require('express');
var cors = require('cors')
const routerApi = require('./routes');
//middlewares
const {logError, handlerError, boomHandlerError} = require('./middleware.error')
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())

const whitelist = ['http://localhost:8080', 'https://my-app.com'];
var corsOptions = {
  origin: (origin, callback)=>{
    if(whitelist.includes(origin)){
      callback(null, true);
    }else{
      callback(new Error('no permitido'))
    }
  }
}
app.use(cors(corsOptions));
routerApi(app);
//middleware de error
app.use(logError);
app.use(boomHandlerError);
app.use(handlerError);


app.listen(port,()=>{
  console.log(`listening on port ${port}`);
})
