const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const {nsp_data} = require('./data');
 
app.get('/',(req,res)=>{
    res.send('WE ARE ON HOMEPAGE')
});
app.get('/api-nsp-data',(req,res)=>{
   res.json(nsp_data);
});
app.get('/api-nsp-data/:id',(req,res)=>{
    res.send(req.params.id);
});

app.listen(PORT, ()=>{console.log(`server listening to port ${PORT}`)})