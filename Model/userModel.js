const mongoose = require('mongoose');
const userModel = mongoose.Schema({
    name: { 
        type: String,
        require: true

     },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
},   {
    timestamps: true
}
)

const User = mongoose.model("user", userModel)
module.exports = User;