const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: 1
    },
    timeline_id: {
        type: Number
    },
    parts_id: {
        type: Array
    },
    title: {
        type: String
    },
    message: {
        type: String
    }
})


const Content = mongoose.model('Content', contentSchema)

module.exports = { Content }