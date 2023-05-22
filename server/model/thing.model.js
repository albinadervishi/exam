const mongoose = require('mongoose');

const ThingSchema = new mongoose.Schema({
    name: { 
        type: String,
        minlength: [3, "emri duhet te jete me i gjate se 3 "] ,
        unique: true
     },
    likes: { type: Number}
}, { timestamps: true });

module.exports = mongoose.model('Thing', ThingSchema);