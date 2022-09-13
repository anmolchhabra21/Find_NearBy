const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// Create Geolocation Schema


const GeoSchema = new Schema({
    type: {
        type : String,
        default : "Point"
    },
    coordinates : {
        type:[Number],
        index: "2dsphere"
    }
})

// create ninja schema and model
const NinjaSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name field is required']
    },
    rank:{
        type: String
    },
    available:{
        type : Boolean,
        default : false
    },
    geometry:GeoSchema

    // Add in geolocation

})



const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;