var router = require('express').Router();

router.get('/', function(req, res){
    res.sendFile('/Users/matthewcordeiro/Desktop/PCS-projects/Quitter/layouts/posts.html');
});

module.exports = router;