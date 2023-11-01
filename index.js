const express = require('express');
const server =  express();
const delivery = require('./src/data/delivery.json');

server.get('/delivery', (req, res) => {
    return res.json({delivery});
})

server.listen(3000, () => {
    console.log('servidor esta funcionando')
})