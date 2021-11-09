'use strict';
const server = require('./src/server');
const { db } = require('./src/models/index');

db.sync()
  .then(() => {
    server.listen(3000 ||3030, () => {
      console.log('Server UP');
    });
  });

