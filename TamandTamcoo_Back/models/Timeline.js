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
    title: {
        type: String
    },
    contents: [{
        type: mongoose.Types.ObjectId,
        ref: 'Content'
    }]
})


const Timeline = mongoose.model('Timeline', timelineSchema)

module.exports = { Timeline }