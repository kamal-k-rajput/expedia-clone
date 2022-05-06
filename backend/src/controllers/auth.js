const User = require("../models/user.model");
var jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose')


const newtoken = (user) => {
    return jwt.sign({ user }, 'shhhhh');
}

const login = async(req, res) => {


    let user = await User.findOne({ email: req.body.email }).lean().exec();
    if (user == null) {
        return res.send("email not  registeed");
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {

            const { email, firstname, surname } = user;
            let token = newtoken(user)
            res.send({ email, firstname, surname, token })
        } else {
            res.send('your password is wroung')
        }

    } catch (err) {
        res.send(err.message)
        console.log(err.message)
    }
}




const register = async(req, res) => {

    try {
        //first we need to check email 
        console.log(req.body)
        let user = await User.findOne({ email: req.body.email }).lean().exec();

        if (user) return res.send({ message: 'email already register' });
        //crating the user
        user = await User.create(req.body);

        //genrating the token
        const { email, firstname, surname } = user;
        let token = newtoken(user)
        res.send({ email, firstname, surname, token })
    } catch (err) {
        console.log(err.message)
    }



}




module.exports = { register, login }