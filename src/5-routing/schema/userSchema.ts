const mongoose = require('mongoose');
const { Schema } = mongoose;

// user schema examples 
const UserSchema = new Schema({
    email : {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password : {
        type: String,
        required: true,
        minlength: 6,
    },
    firstName : {
        type: String,
        required: true,
        trim: true,
    },
    lastName : {
        type: String,
        required: true,
        trim: true,
    },
    phoneNumber : {
        type: String,
        required: true,
        trim: true,
    },
    address : {
        type: String,
        required: true,
        trim: true,
    },
    city : {
        type: String,
        required: true,
        trim: true,
    },
    createdAt : {
        type: Date,
        default: Date.now,
    },
    updatedAt : {
        type: Date,
        default: Date.now,
    },
    isDeleted : {
        type: Boolean,
        default: false,
    },
  
})

export default UserSchema;

// joi validation
// schema - data types - String, Number, Boolean, Date, Array, ObjectId, enum, Another Schema
// schema - keys types - required, unique, default, trim, lowercase, uppercase, minlength, maxlength, match, validate

