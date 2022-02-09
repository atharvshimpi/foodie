const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    title: {
        type: String
    },
    tags: {
        type: [String]
    },
    location: {
        type: String,
        enum: ['Pune', 'Mumbai', 'Goa', 'Bangalore', 'Delhi']
    },
    address: {
        type: String
    },
    category: {
        type: String
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 5
    },
    eta: {
        type: Number
    },
    avgcost: {
        type: Number
    },
    offerPercentage: {
        type: Number,
        min: 0,
        max: 100,
        default: 0 // 0 means no offer
    },
    offerMaxBound: {
        type: Number,
    },
    offerCode: {
        type: String
    },
    likes: {
        type: [String], 
        default: [] 
    },
    reviews: {
        type: [String],
        default: []
    },
    restaurantPoster: {
        type: String
    },
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', restaurantSchema);