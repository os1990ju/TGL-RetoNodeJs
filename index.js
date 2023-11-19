const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;
app.use(express.json())
app.get('/', (req, res)=>{
  res.send('Hello from nodejs runing on docker and ...');
})

routerApi(app);
//query
app.get('/people',(req, res)=>{
  const {offset, limit}=req.query;
  if(offset && limit){
    res.json({
      offset,
      limit
    });
  }else{
    res.send('No hay queries')
  }
})

app.listen(port,()=>{
  console.log(`listening on port ${port}`);
})
