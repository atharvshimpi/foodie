const mongoose = require("mongoose");
const Restaurant = require("../models/restaurant.js");
const Food = require("../models/food.js");

// ADD food
exports.addFood = async (req, res) => {
    const { 
        title,
        veg,
        cost,
        description,
        category,
        parentRestaurant
    } = req.body;

    const newFood = new Food({
        title,
        veg,
        cost,
        description,
        category,
        parentRestaurant,
        foodImage: req.file.path, // req.file.originalname
    })

    try {
        await newFood.save();
        res.status(201).json(newFood);
    } catch (error) {
        res.status(409).json({ 
            message: error.message
        });
    }
}

// UPDATE food
exports.updateFood = async (req, res) => {
    const { id } = req.params;
    const { 
        title,
        veg,
        cost,
        description,
        category,
        parentRestaurant, 
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Sorry! No Food with id: ${id} was found.`);
    }

    const updatedFood = { 
        _id: id,
        title,
        veg,
        cost,
        description,
        category,
        parentRestaurant, 
    };

    await Food.findByIdAndUpdate(id, updatedFood, { new: true })

    res.json(updatedFood); // try it as res.json({ ...updatedRestaurant, message: "Gg" })
}

// DELETE food
exports.deleteFood = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Sorry! No Food with id: ${id} was found.`);
    }

    await Food.findByIdAndRemove(id);

    res.json({ 
        message: `Alas! Food Item with id: ${id} was successfully deleted.` 
    });
}

// FETCH 'A' food
exports.fetchFood = async (req, res) => {
    const { restId, id } = req.params;

    try {
        const uniqueRestaurant = await Food.findOne({ parentRestaurant: restId });
        
        if(uniqueRestaurant) {
            const foodDetails = await Food.findById(id).populate("parentRestaurant")
            res.status(200).json(foodDetails);
        } else {
            return res.status(404).send(`Sorry! No Food with restaurant id: ${restId} was found.`)
        } 
    } catch (error) {
        res.status(404).json({ 
            message: error.message 
        });
    }
}

// FETCH BY RESTAURANT food
exports.fetchFoodsByRestaurant = async (req, res) => {
    const { restId } = req.params;
    try {
        const foodByRestaurant = await Food.find({ parentRestaurant: restId }).populate("parentRestaurant").sort({ _id: -1 })
        res.status(200).json(foodByRestaurant);
    } catch (error) {
        res.status(404).json({ 
            message: error.message 
        });
    }
}

// FETCH ENTITY BY SEARCH food
exports.fetchEntityBySearch = async (req, res) => {
    const { search, option, area } = req.query;
    const title = new RegExp(search, 'i');
    try {
        if(option === 'food') {
            const searchEntity = await Food.find({ title: title }).populate("parentRestaurant").sort({ _id: -1 }) 
            res.status(200).json(searchEntity);
        }
        if(option === 'restaurant') {
            const searchEntity = await Restaurant.find({ title: title }).sort({ _id: -1 })
            res.status(200).json(searchEntity);
        }
    } catch (error) {
        res.status(404).json({ 
            message: error.message 
        });
    }
}