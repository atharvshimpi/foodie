const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    veg: {
        type: Boolean,
        required: true,
    },
    cost: {
        type: Number
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    foodImage: {
        type: String
    },
    parentRestaurant: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Food', foodSchema);