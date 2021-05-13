const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: 'Name is required'
    },
    lastName: {
        type: String,
        required: 'Name is required'
    },
    username: {
        type: String,
        required: 'Username is required',
        unique: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    password: {
        type: String,
        len: [8],
        required: 'Password is required',
        unique: true
    },
    codes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Code'
        }
    ]
});

const User = mongoose.model('User', userSchema);
module.exports = User;