const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    teamName: String,
    players: [{
        name: String,
        number: Number,
    }],
})

module.exports = mongoose.model("User", userSchema)