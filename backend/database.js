const mongoose = require('mongoose'); 
 const URI = 'mongodb://127.0.0.1:27017/empleados'; 
 mongoose.connect(URI)
     .then(db => console.log('Conneted'))
     .catch(err => console.error(err));  
 module.exports = mongoose; 