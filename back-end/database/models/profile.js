const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    full_name: {
        type: String,
        trim: true
    },
    mobile_no: {
        type: Number,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    about: {
        type: String,
        trim: true
    }

});

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;