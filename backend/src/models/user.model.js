const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

let userSchema = new mongoose.Schema({

    email: { type: String, required: true },
    firstname: { type: String, required: true },
    surname: { type: String, required: true },
    password: { type: String, required: true }
})
userSchema.pre('save', function(next) {

    if (!this.isModified('password')) return next();

    let hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;

    return next();

})

// userSchema.methods.matchPassword = async function(password) {

//     return await bcrypt.compareSync(password, this.password);
// }



const User = mongoose.model('user', userSchema);

module.exports = User;