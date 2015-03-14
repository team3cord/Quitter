var //User = require('../models/user.js'),
    jwt = require('jwt-simple'),
    router = require('express').Router();

var secretKey = 'supersecretkey';

router.get('/session',function(req,res){
    var username = req.body.username,
        token = jwt.encode({username: username}, secretKey);
    res.json(token);
});
router.get('/user', function(){
   var token = req.headers['x-auth'],
       user = jwt.decode(token, secretKey);
    res.json(user);

});
module.exports = router;