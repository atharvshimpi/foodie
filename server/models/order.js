const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    orderItems: [
        {
            title: {
                type: String,
                required: true
            },
            cost: {
                type: Number,
                required: true,
            },
            description: {
                type: String
            },
            quantity: {
                type: Number,
                required: true,
            },
            foodImage: {
                type: String
            },
            veg: {
                type: Boolean,
                required: true
            },
            parentRestaurant: {
                type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant',
                required: true
            }
        }
    ],
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    deliveredAt: {
        type: Date,
    },
    paidAt: {
        type: Date,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    deliveryAddress: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        zipcode: {
            type: String,
            required: true            
        }
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: {
        id: {
            type: String
        },
        status: {
            type: String
        },
        uploadStatus: {
            type: String
        },
        emailAddress: {
            type: String
        },
    }

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);