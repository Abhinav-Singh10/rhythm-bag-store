const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/rhythm");

const userSchema=mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: [],
    },
    orders: {
        type: Array,
        default: [],
    },
    contact: Number,
    picture: String,
});


module.exports= mongoose.model("user",userSchema);