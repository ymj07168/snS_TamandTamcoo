const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
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