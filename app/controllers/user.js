var //User = require('../models/user.js'),
    jwt = require('jwt-simple'),
    router = require('express').Router(),
    _ = require('lodash'),
    bcrypt =require('bcrypt');

var secretKey = 'supersecretkey',
    users = [{username: 'Matthew Camaro', password: '$2a$10$ltIcUa2RTNTpUoUDCteVAeEudk741T/zDKHeXYETQK/qypjLUpREe'}];

function findUserByUsername(username){
    return _.find(users, {username: username});
}
function validateUser(user, password, callback){
    bcrypt.compare(password, user.password, callback);
}

router.post('/session',function(req, res){
    var user = findUserByUsername(req.body.username);
    validateUser(user, req.body.password, function(err, valid) {
            if (err || !valid) {
                return res.send(401)
            }
            var token = jwt.encode({username: user.username}, secretKey);
            res.json(token);
            //Unauthorized
        });
});
router.get('/user', function(req, res){
   var token = req.headers['x-auth'],
       user = jwt.decode(token, secretKey);
    res.json(user);

});
module.exports = router;