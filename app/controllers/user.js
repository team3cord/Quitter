var //User = require('../models/user.js'),
    jwt = require('jwt-simple'),
    router = require('express').Router(),
    _ = require('lodash');

var secretKey = 'supersecretkey',
    users = [{username: 'Matthew Camaro', password: 'mypassword'}];

function findUserByUsername(username){
    return _.find(users, {username: username});
}
function validateUser(user, password){
    return user.password === password;
}

router.post('/session',function(req, res){
    var user = findUserByUsername(req.body.username);
    if(!validateUser(user, req.body.password)){
        return res.send(401) //Unauthorized
    }
    token = jwt.encode({username: user.username}, secretKey);
    res.json(token);
});
router.get('/user', function(req, res){
   var token = req.headers['x-auth'],
       user = jwt.decode(token, secretKey);
    res.json(user);

});
module.exports = router;