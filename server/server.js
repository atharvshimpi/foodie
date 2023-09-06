const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const restaurantRoutes = require("./routes/restaurant.js");
const foodRoutes = require("./routes/food.js");
const orderRoutes = require("./routes/order.js");
const authRoutes = require("./routes/auth.js");

const app = express();

// environment variable config
dotenv.config();

app.get('/', (req, res) => {
    res.send("Welcome to Foodie App!")
});

// middleware bodyParser code
app.use(cors());

app.use('/uploads', express.static('uploads'));

app.use(express.json());

app.use(bodyParser.urlencoded({
    limit: '100mb',
    extended: true
}));

app.use(bodyParser.json({
    limit: '100mb',
    extended: true
}));

// connect to mongoDB atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => {
    console.log("Connection to mongoDB atlas established!");
})
.catch((err) => {
    console.log("Message: " + err);
});

app.use('/restaurant', restaurantRoutes);
app.use('/food', foodRoutes);
app.use('/order', orderRoutes);
app.use('/auth', authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on: ${process.env.PORT}`);
});