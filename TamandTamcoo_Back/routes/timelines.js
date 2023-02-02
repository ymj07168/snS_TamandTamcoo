const express = require('express');
const router = express.Router();

const { Timeline } = require('../models/Timeline');
const { auth } = require('../middleware/auth');

router.get('/auth', auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        nickname: req.user.nickname,
        role: req.user.role,
    })
})

// 사용자 타임라인 목록 조회 
router.get('/read', auth, (req, res) => {
    Timeline.find({ uid: req.user._id },
        (err, timelines) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).send({
                timelines
            })
        })
        .populate('contents')
        .populate('bid')
})

// 타임라인 생성
router.post('/create', auth, (req, res) => {
    const timeline = new Timeline(req.body)

    timeline.uid = req.user._id

    timeline.save((err, timeline) => {
        if (err) return res.json({ success: false, err })

        Timeline.find({ '_id': timeline._id })
            .populate('uid')
            .populate('bid')
            .exec((err, timelines) => {
                if (err) return res.json({ success: false, err });
                return res.status(200).send({ success: true, timelines })
            })
    })
})

router.get('/:id', (req, res) => {
    let { id } = req.params;
    Timeline.find({ _id: id },
        (err, timelines) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).send({
                timelines
            })
        })
        .populate('contents')
        .populate('bid')
})

module.exports = router;