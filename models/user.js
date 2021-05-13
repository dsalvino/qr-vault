const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        // required: 'Name is required'
    },
    lastName: {
        type: String,
        // required: 'Name is required'
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
        required: 'Password is required'
    },
    codes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Code'
        }
    ]
});

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password'))
        return next();
    try {
        user.password = await bcrypt.hash(user.password, 12);
        return next();
    } catch (err) {
        return next(err);
    }
});

userSchema.methods.comparePasswords = function (userPassword, cb) {
    bcrypt.compare(userPassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    })
}


const User = mongoose.model('User', userSchema);
module.exports = User;