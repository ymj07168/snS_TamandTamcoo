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

// 사용자 이메일 타임라인 목록 조회 
router.get('/', auth, (req, res) => {
    Timeline.find({ eamil: req.body.email },
        (err, timelines) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).send({
                timelines
            })
        })
})

router.post('/', auth, (req, res) => {
    Timeline.
})

module.exports = router;