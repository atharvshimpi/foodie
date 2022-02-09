const express = require("express");
const router = express.Router();
const multer = require("multer");

const { addFood, updateFood, deleteFood, fetchFood, fetchFoodsByRestaurant, fetchEntityBySearch } = require("../controllers/food.js");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/food/')
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

router.post('/add', upload.single('foodImage'), addFood);
router.get('/search', fetchEntityBySearch);
router.patch('/update/:id', updateFood);
router.delete('/delete/:id', deleteFood);
router.get('/fetch/:restId/:id', fetchFood);
router.get('/fetch/:restId', fetchFoodsByRestaurant);

module.exports = router;