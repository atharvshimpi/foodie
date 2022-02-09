const mongoose = require("mongoose");
const Order = require("../models/order.js");

exports.placeOrder = async (req, res) => {
    const {
        orderItems,
        deliveryAddress,
        paymentMethod,
        totalPrice
    } = req.body;
    try {
        if(orderItems && orderItems.length === 0) {
            res.status(400).json({ message: 'No Orders Found' });
        } else {
            const order = new Order({
                orderItems,
                user: req.user._id,
                deliveryAddress,
                paymentMethod,
                totalPrice
            })

            const placeOrder = await order.save()
            res.status(201).json(placeOrder)
        }
    } catch (error) {
        res.status(409).json({ 
            message: error.message
        });
    }
}

exports.fetchOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findById(id).populate("orderItems.parentRestaurant")
        if(order) {
            res.status(200).json(order)
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

exports.fetchOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id }).populate("orderItems.parentRestaurant").sort({ _id: -1 })
        if(orders) {
            res.status(200).json(orders)
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}