const express = require('express');

const Ninja = require('../models/ninja');


const router = express.Router();

router.get("/ninjas",function(req,res,next){
    // Ninja.find({}).then(function(nikal){
    //     res.send(nikal);
    // })
    // Url Parameters not same as request parameters not params id

    Ninja.aggregate([
        {
            $geoNear:{
                distanceField: "dist.calculated",
                near:{ type:'Point', coordinates: [parseFloat(req.query.lat),parseFloat(req.query.lng)],},
                
                maxDistance: 1000000, 
                spherical: true
            }
        }
    ]).then(function(found){
        res.send(found);
    });

    // Ninja.geoNear(
    //     {type: "point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    //     {maxDistance: 100000, spherical: true}
    //   ).then(function(ninjas){
    //     res.send(ninjas);
    //   });
    });

router.post("/ninjas",function(req,res,next){
    // console.log(req.body);
    // var ninja = new Ninja(req.body);
    // ninja.save();    2 in one ->

    Ninja.create(req.body).then(function(ninja){
        console.log(ninja);
        res.send(ninja);
    }).catch(next);

    // res.send({type : "post", 
    // name: req.body.name,
    // rank: req.body.rank});

});

router.put("/ninjas/:id",function(req,res,next){
    res.send(req.params.id);
    Ninja.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        // Ninja.findOne({_id:req.params.id}).then(function(ninja){
        //     res.send(ninja);
        // })  
        res.send(req.body);
    })
    // res.send({type : "PUT"});

});

router.delete("/ninjas/:id",function(req,res,next){
    // console.log(req.params.id);/
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    })
    // res.send({type : "DELETE"});

});

function f(){
    console.log("hjhj");
}
module.exports = router;
module.exports = f;
