var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quitter', function( ){
    console.log('MongoDB connected.');
});
module.exports = mongoose;