const mongoose = require('mongoose');

const backgroundSchema = mongoose.Schema({
    title: String,
    imgPath: String,
    category: Number
})


const Background = mongoose.model('Background', backgroundSchema)

module.exports = { Background }