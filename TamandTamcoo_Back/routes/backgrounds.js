const express = require('express');
const router = express.Router();

const { Background } = require('../models/Background');
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

// 배경 목록 전체 조회
router.get('/', auth, (req, res) => {
    Background.find({},
        (err, backgrounds) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).send({
                backgrounds
            })
        })
})

module.exports = router;