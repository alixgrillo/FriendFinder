module.exports = function(router, app, path){
    

    router.get('/survey', function (req, res) {
        console.log("survey");
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });
    
    router.get('/', function (req, res) {
        console.log("home");
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
    return router;
}


// var express = require('express');
// var router = express.Router();

// router.get('/', function(req, res) {
//   res.send('Welcome to Node JS V1');
// });

// router.use('/users', require('./users').router);

// module.exports.router = router;

// var router = require('express').Router();


// router.get('/survey', function (req, res) {
//     res.sendFile(path.join(__dirname, '/../public/survey.html'));
// });

// router.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '/../public/home.html'));
// });

// module.exports = router;


// module.exports = function(app, path){
    

//     app.get('/survey', function (req, res) {
//         res.sendFile(path.join(__dirname, '/../public/survey.html'));
//     });
    
//     app.get('/', function (req, res) {
//         res.sendFile(path.join(__dirname, '/../public/home.html'));
//     });

// }