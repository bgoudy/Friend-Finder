var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("api/friends", function(req, res) {
        console.log(req.body.scores);

        var user = req.body;

        for(var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        var frIndex = 0;
        var minDiff = 25;

        for(var j = 0; j < friends.length; j++) {
            var totDiff = 0;
            for(var l = 0; l < friends[j].scores.length; l++) {
                var diff = Math.abs(user.scores[l] - friends[j].scores[l]);
                totDiff += diff;
            }

            if(totDiff < minDiff) {
                frIndex = i;
                minDiff = totDiff;
            }
        }

        friends.push(user);

        res.json(friends[frIndex]);
    });
};