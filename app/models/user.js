var db =require('../../node/db');

var User = db.model('User',{
   username: String,
    password: String
});

module.exports = User;

