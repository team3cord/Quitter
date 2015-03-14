var //User = require('../models/user.js'),
    jwt = require('jwt-simple'),
    router = require('express').Router();

var secretKey = 'supersecretkey';

router.post('/session',function(req, res){
    var username = req.body.username,
        token = jwt.encode({username: username}, secretKey);
    res.json(token);
});
router.get('/user', function(req, res){
   var token = req.headers['x-auth'],
       user = jwt.decode(token, secretKey);
    res.json(user);

});
module.exports = router;