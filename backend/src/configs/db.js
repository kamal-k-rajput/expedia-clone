const mongoose = require('mongoose');

const connect = () => {

    return mongoose.connect('mongodb+srv://aashish:123@cluster0.lczj1.mongodb.net/expedia')
}

module.exports = connect;