const mongoose = require('mongoose');

const timelineSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: 1
    },
    user_id: {
        type: Number
    },
    bg_id: {
        type: Number
    },
    contents: {
        type: Array
    }
})


const Timeline = mongoose.model('Timeline', timelineSchema)

module.exports = { Timeline }