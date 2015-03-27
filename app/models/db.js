var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quitter', function( ){
    console.log('Quitter MongoDB connected.');
});
module.exports = mongoose;