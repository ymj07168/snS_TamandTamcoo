const mongoose = require('mongoose');

const timelineSchema = mongoose.Schema({
    uid: {
        type: ObjectId,
        ref: 'User'
    },
    bid: {
        type: ObjectId,
        ref: 'Background'
    },
    contents: {
        type: Array
    }
})


const Timeline = mongoose.model('Timeline', timelineSchema)

module.exports = { Timeline }