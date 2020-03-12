var friends = require("../data/friends")



module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })


app.post("/api/friends", function(req,res){

    console.log(req.body)
    var survey = req.body
    var matchName=""
    var matchPic=""
    var minDif = 10000
    for (var i=0; i<friends.length; i++){
        var friend =  friends[i]
        var sum = 0
        for (var j=0; j < survey.scores.length; j++){

            sum = sum +Math.abs(parseInt(survey.scores[j]) - friend.scores[j])
        }
        if (sum<minDif){
            matchName = friend.name
            matchPic= friend.photo
            minDif= sum
        }
    }

    console.log(matchName,matchPic)

    // you can create the logic for the match
   // respond the front end with a name and 
   //the pic url from the best match

   // loop the array of friends, loop every score array and calculate the differences with the new survey
    res.json([matchName,matchPic])
})


}