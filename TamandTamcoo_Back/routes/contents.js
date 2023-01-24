const express = require('express');
const router = express.Router();

const { Content } = require('../models/Content');
const { Timeline } = require('../models/Timeline');


// 메시지 작성
router.post('/create', (req, res) => {

    const content = new Content(req.body)

    content.save()

    Timeline.findOneAndUpdate({ _id: req.body.tid },
        {
            $addToSet: {
                contents: content,
            },
        },
        (err, timelines) => {
            if (err) return res.json({ success: false, err })
            return res.status(200).send({
                success: true
            })
        })
})


// 메시지 수정
router.post('/update', (req, res) => {

    Content.findOneAndUpdate({ _id: req.body._id },
        { message: req.body.message },
        (err, contents) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).send({
                success: true
            })
        })
})



module.exports = router;