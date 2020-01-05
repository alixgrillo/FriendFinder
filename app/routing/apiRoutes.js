module.exports = function(router, app, friends, path){
   

    router.get("/api/friends", function (req, res) {
        console.log(friends);
        return res.json(friends);
    });
      
    // router.post("/api/friends", function (req, res) {
    //     var newFriend = req.body
    //     //friends.push(newFriend);
    //     res.send(newFriend);
    // });

    app.use("/", require("./htmlRoutes.js")(router, app, path));
    app.use("/survey", require("./htmlRoutes.js")(router, app, path));

    return router;

    //app.use("/*", require("./htmlRoutes.js")(app, path));


}

// var router = require('express').Router();

// router.get('/api/friends', function (req, res) {
//     return res.json(friends);
// });

// router.post("/api/friends", function (req, res) {
//     var newFriend = req.body
//     friends.push(newFriend);
// });

// module.exports = router;


// module.exports = function(app, friends, path){
   

//     app.get("/api/friends", function (req, res) {
//         return res.json(friends);
//     });
      
//     // app.post("/api/friends", function (req, res) {
//     //     var newFriend = req.body
//     //     friends.push(newFriend);
//     // });

//     app.use("/*", require("./htmlRoutes.js")(app, path));

// }