const express = require('express');
const User = require('../models/user.model')
const router = express.Router();

router.get('',async(req,res)=>{
        try{
            const user = await User.find().lean().exec();
            res.send(user);
        }catch(err){
            console.log(err.message)
        }
})



module.exports = router;