const mongoose = require('mongoose');

// schema
const travelSchema = new mongoose.Schema({
    destination: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    activities: { type:String,required:true }
},{collection:'plans'}); 

// Create the model
module.exports = mongoose.model('Travel', travelSchema);
