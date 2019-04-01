var User = require("../../db").User;
var route = require("express").Router();

route.get("/", function(req, res)  {
    //we want to send array of all users
    //from our database here
    User.findAll()
        .then(function(users) {
            res.status(200).send(users);
        })
        .catch(function(err) {
            res.status(500).send({
                error: "Could not retrieve users"
            });
        });
});

route.post("/", function(req, res) {
    User.create({
        //we expect  the req to  have name in it as it cannot be null per db.js
        //we will create new user
        name: req.body.name
    }).then(function(user)  {
        res.status(201).send(user);
    }).catch(function(err){
        res.status(501).send({
            error: "Could not add new user"
        });
    });
});


exports = module.exports = route;