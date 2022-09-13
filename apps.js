console.log("1");
const express = require('express');
// const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const x = require('./routes/api')
// console.log(x())
const app = express();


mongoose.connect('mongodb://localhost/ninjago');


app.use(express.static('public'));



app.use(bodyParser.json());


app.use('/api',require('./routes/api'));




// Error handling middleware
app.use(function(err,req,res,next){
    // console.log(err);
    res.status(422).send({'error' : err.message})
});


app.get('/',function(req, res){
    console.log("Get Request accepted")
    // res.send({name : "Yoshi"})
    res.send({"name":"sdfsf"})
   
    // res.end(); To stop the spinning of the top spinner
})

app.listen(process.env.port || 4000, function(){
    console.log("App running on port 4000");
})