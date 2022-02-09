const mongoose = require("mongoose");
const Restaurant = require("../models/restaurant.js");

// ADD restaurant
exports.addRestaurant = async (req, res) => {
    const { 
        title,
        tags,
        location,
        address, 
        category,
        rating ,
        eta,
        avgcost,
        offerPercentage,
        offerMaxBound,
        offerCode,
    } = req.body;

    const newRestaurant = new Restaurant({
        title, 
        tags,
        location,
        address, 
        category,
        rating ,
        eta,
        avgcost,
        offerPercentage,
        offerMaxBound,
        offerCode,
        restaurantPoster: req.file.path, // req.file.originalname
    })

    try {
        await newRestaurant.save();
        res.status(201).json(newRestaurant);
    } catch (error) {
        res.status(409).json({ 
            message: error.message
        });
    }
}

// UPDATE restaurant
exports.updateRestaurant = async (req, res) => {
    const { id } = req.params;
    const { 
        title,
        tags,
        location,
        address, 
        category,
        rating ,
        eta,
        avgcost,
        offerPercentage,
        offerMaxBound,
        offerCode, 
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Sorry! No Restaurant with id: ${id} was found.`);
    }

    const updatedRestaurant = { 
        _id: id,
        title, 
        tags,
        location,
        address, 
        category,
        rating ,
        eta,
        avgcost,
        offerPercentage,
        offerMaxBound,
        offerCode, 
    };

    await Restaurant.findByIdAndUpdate(id, updatedRestaurant, { new: true })

    res.json(updatedRestaurant); // try it as res.json({ ...updatedRestaurant, message: "Gg" })
}

// DELETE restaurant
exports.deleteRestaurant = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Sorry! No Restaurant with id: ${id} was found.`);
    }

    await Restaurant.findByIdAndRemove(id);

    res.json({ 
        message: `Alas! Restaurant with id: ${id} was successfully deleted.` 
    });
}

// FETCH 'A' restaurant
exports.fetchRestaurant = async (req, res) => {
    const { id } = req.params;

    try {
        const restaurantDetails = await Restaurant.findById(id)
        res.status(200).json(restaurantDetails);
    } catch (error) {
        res.status(404).json({ 
            message: error.message 
        });
    }
}

// FETCH BY LOCATION restaurants
exports.fetchRestaurantsByLocation = async (req, res) => {
    const { area } = req.params;
    try {
        const restaurants = await Restaurant.find({ location: area })
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(404).json({ 
            message: error.message 
        });
    }
}

// FETCH ALL restuarants
exports.fetchRestaurants = async (req, res) => {
    try {
        const allRestaurants = await Restaurant.find()
                                    .sort({ _id: -1 })
        res.status(200).json({
            data: allRestaurants
        });
    } catch (error) {
        res.status(404).json({ 
            message: error.message 
        });
    }
}