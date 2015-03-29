var express = require('express'),
    router  = express.Router();

router.get('/', function(req, res){
    res.sendFile('/Users/matthewcordeiro/Desktop/PCS-projects/Quitter/public/app.html');
});


module.exports = router;
