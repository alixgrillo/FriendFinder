module.exports = function(router, app, friends, path){
   

    router.get("/api/friends", function (req, res) {
        return res.json(friends);
    });
      
    router.post("/api/friends", function (req, res) {
        var newFriend = req.body
        friends.push(newFriend);
        
        var bestFriend = 0;
        var bestDifference = 51;

        for(var i=0; i < friends.length - 1; i++){
            var sum = 0;
            for(j=0; j<newFriend.scores.length; j++){
                sum += Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j]));
            }
            if(sum < bestDifference){
                bestDifference = sum;
                bestFriend = i;
            }
        }
        console.log(friends[bestFriend]);
        
        res.send(friends[bestFriend]);
 
    });

    app.use("/", require("./htmlRoutes.js")(router, app, path));
    app.use("/survey", require("./htmlRoutes.js")(router, app, path));

    return router;
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