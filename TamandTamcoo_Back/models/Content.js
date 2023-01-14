const mongoose = require('mongoose');
const { Timeline } = require('./Timeline');

const contentSchema = mongoose.Schema({
    tid: {
        type: ObjectId,
        required: true,
        ref: Timeline
    },
    pid: {
        type: ObjectId,
        ref: Parts
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