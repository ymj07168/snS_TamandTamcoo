
var express = require('express');
var router = express.Router();

const { Content } = require('../models/Content')
const { Timeline } = require('../models/Timeline')
const { User } = require('../models/User')
const { Parts } = require('../models/Parts')


//특정 id 주소의 타임라인 조회(콘텐츠도 가지고 옴)
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const timeline = await Timeline.findOne({
            where: {
                id
            }
        });

        if (!timeline || !id) {
            res.status(200).json({message: "Wrong Param"});
            return;
        }

        const content = await Content.findAll({
            where: {
                timeline_id: id
            }
        });

        res.status(200).json({message: "Read Success"});
    } catch (err) {
        console.log(err);
        res.status(200).json({message: "error"})
    }
})

//타임라인 생성(트랜잭션 추가 필요)
router.post('/', async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        //이메일이나 비밀번호가 없을 시 에러
        if (!email || !password) {
            res.status(200).json({message: "Wrong Param"});
        }

        //이메일이나 비밀번호가 User에 이미 있다면 에러
        const user = await User.findOne({
            where: {
                email,
                password
            }
        });

        if (user) {
            return res.status(200).json({message: "Already In"});
        }

        const createTimeline = await Timeline.create({
           email,
           password
        });
        //테스트용 콘솔 로그
        console.log('createTimeline : ', createTimeline)

        const data = {
            timeline_id: createTimeline.dataValues.id
        }
        
        res.status(200).json({message: "Create Success"});
    } catch (err) {
        console.log(err);
        res.status(200).json({message: "error"})
    }
})
