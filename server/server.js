// require() method -> import module
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
// mongoose - Object Data Modeling (ODM) library for MongoDB
const mongoose = require("mongoose");

const restaurantRoutes = require("./routes/restaurant.js");
const foodRoutes = require("./routes/food.js");
const orderRoutes = require("./routes/order.js");
const authRoutes = require("./routes/auth.js");

const app = express();

// read & parse .env file & set all the key-value pairs in the env var of node.js
dotenv.config();

// app.use() -> mount middlewares 
// Middlewares - function that run bwteen the time server gets the request & server sends the response

// enables Cross-Origin Resource Sharing (CORS) by setting appropriate http headers
app.use(cors());

// handle and serve static files
app.use('/uploads', express.static('uploads'));

// When a client sends an HTTP request with a JSON payload, such as a JSON object or array in the request body, this middleware parses the 
// JSON data and makes it available in the request object (req.body)
app.use(express.json());

// handle x-www-form-urlencoded & set limit
app.use(bodyParser.urlencoded({
    limit: '100mb',
    // extended - allows parsing of nested objects and arrays
    extended: true
}));

// handle JSON & set limit
app.use(bodyParser.json({
    limit: '100mb',
    // extended - allows parsing of nested objects and arrays
    extended: true
}));

// connect to mongoDB atlas
try {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("Connection to mongoDB atlas established!");
    })
} catch (error) {
    console.log("Mongo Error: " + error.message);
}

app.get('/', (req, res) => {
    res.send("Welcome to Foodie App!")
});

app.use('/restaurant', restaurantRoutes);
app.use('/food', foodRoutes);
app.use('/order', orderRoutes);
app.use('/auth', authRoutes);

// listen for incoming HTTP requests on the port specified
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on: ${process.env.PORT}`);
});