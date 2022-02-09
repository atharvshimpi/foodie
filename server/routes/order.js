const express = require("express");
const router = express.Router();
const multer = require("multer");

const isUserLoggedIn = require("../middlewares/auth.js");
const { placeOrder, fetchOrderById, fetchOrders } = require("../controllers/order.js");

router.post('/add', isUserLoggedIn, placeOrder);
router.get('/fetch/myorders', isUserLoggedIn, fetchOrders);
router.get('/fetch/:id', isUserLoggedIn, fetchOrderById);

module.exports = router;