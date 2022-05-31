const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { _id: this._id, email: this.email },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
    );
    return token;
};

// comparing password
userSchema.methods.correctPassword = async function (
    candidate_Password,
    user_Password
) {
    return await bcrypt.compare(candidate_Password, user_Password);
};

module.exports = mongoose.model('user', userSchema, 'users');