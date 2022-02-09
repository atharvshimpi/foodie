const express = require("express");
const router = express.Router();
const multer = require("multer");

const { addRestaurant, updateRestaurant, deleteRestaurant, fetchRestaurant, fetchRestaurantsByLocation, fetchRestaurants } = require("../controllers/restaurant.js");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 15 * 1024 * 1024 // accepts only upto 15mb
    }
});

router.post('/add', upload.single('restaurantPoster'), addRestaurant);
router.patch('/update/:id', updateRestaurant);
router.delete('/delete/:id', deleteRestaurant);
router.get('/fetch/:id', fetchRestaurant);
router.get('/:area/fetch', fetchRestaurantsByLocation);
router.get('/fetch', fetchRestaurants);

module.exports = router;