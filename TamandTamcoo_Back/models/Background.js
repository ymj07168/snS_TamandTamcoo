const mongoose = require('mongoose');

const backgroundSchema = mongoose.Schema({
    image: String,
    kind: {
        type: Number,
        default: 1
    }
})


const Parts = mongoose.model('Background', backgroundSchema)

module.exports = { Background }