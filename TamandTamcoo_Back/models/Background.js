const mongoose = require('mongoose');

const backgroundSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: 1
    },
    image: String,
    kind: {
        type: Number,
        default: 1
    }
})


const Parts = mongoose.model('Background', backgroundSchema)

module.exports = { Background }