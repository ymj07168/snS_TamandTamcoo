const mongoose = require('mongoose');
const { Timeline } = require('./Timeline');
const { Parts } = require('./Parts');

const contentSchema = mongoose.Schema({
    tid: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: Timeline
    },
    title: {
        type: String,
    },
    message: {
        type: String
    },
    parts: {
        type: String
    },
    loc_x: {
        type: Number
    },
    loc_y: {
        type: Number
    }
})


const Content = mongoose.model('Content', contentSchema)

module.exports = { Content }