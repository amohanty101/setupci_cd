const express = require('express');
const app = express();

const hello = require('./hello');

app.get('/', (req, res) => {
    res.send(hello.hello()); 
  });

  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });

