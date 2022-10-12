const express = require("express")
// user Schema가 담긴 model instance를 가정하겠습니다.
const User = require('../schemas/user')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;
const router = express.Router()

// 회원의 전체 목록을 조회하는 API
router.get('/user', async (req, res) => {
    try{
        // usersInfo 변수에 User collection에 저장된 모든 Document를 담습니다.
        const usersInfo = await User.find({});
        const doc = usersInfo.map(v => {
            return {
                userId : v._id,
                name: v.name,
                ID: v.ID,
                pw: v.pw
            }
        });
        // 클라이언트에게 반환합니다.
        return res.status(200).json({result : doc})
    }catch(err){
        // 에러가 발생한 경우 400번 코드 신호를 보내고 메시지를 출력합니다.
        res.status(400).json({message: "회원 목록 조회 실패"})
    }
})

// 한 회원의 userId를 주었을 때 회원 정보를 조회하는 API
router.get('/user/:userid', async (req, res) => {
    try{
        // userId 정보를 URI 내부의 Parameter로부터 받아옵니다.
        const userId = ObjectId(req.params.userid);
        // User collection에서 같은 userId를 가진 Document를 찾습니다.
        const { userData } = await User.find({"_id": userId});
        const doc = {
            userId: userData._id,
            name: userData.name,
            ID: userData.ID,
            pw: userData.pw
        }
        // 클라이언트에게 반환합니다.
        return res.status(200).json({result : doc})
    }catch(e){
        // 에러가 발생한 경우 400번 코드 신호를 보내고 메시지를 출력합니다.
        res.status(400).json({message: "회원 상세 조회 실패"})
    }
})

// express를 가정하고 Router를 썼지만, api 내부 코드는 동일할 것입니다.
module.exports = router