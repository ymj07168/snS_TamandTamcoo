const mongoose = require('mongoose');

const timelineSchema = mongoose.Schema({
    uid: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    bid: {
        type: mongoose.Types.ObjectId,
        ref: 'Background'
    },
    contents: {
        type: Array
    }
})


const Timeline = mongoose.model('Timeline', timelineSchema)

module.exports = { Timeline }