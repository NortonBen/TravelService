'use strict'

const Hooks = use('App/Model/Hooks/User');

/**
*  @var Mongoose mongoose
*/
const mongoose = use('Mongoose')

const TokenSchema = mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    forever: {
        type: Boolean,
        default: false
    },
    is_revoked:  {
        type: Boolean,
        default: false
    },
    expiry: {
        type: Number,
        required: true
    }
},{
    _id: false
});

const MailSchema = mongoose.Schema({
    mail: {
        type: String,
        required: true,
    },
    tokenAccess : {
        type: String
    },
    access: {
        type: boolean,
        default: false,
        required: true,
    }
},{
    _id: false
});

const ProfileSchema = Schema({
    avatar:{
        type: String,
         max: 200,
    },
    address: {
        type: String,
        max: 100,
    },
    brithay: {
        type: Date
    },
    detail: {
        type: String,
         max: 2000,
    }
}, {
    _id:  false
});

let userSchema = mongoose.Schema({
    password: {
        type: String,
        min: 4,
        max: 20,
        required: true
    },
    username: {
        type: String,
        min: 3,
        max: 20,
        required: true
    },
    phones: {
        type: String,
        max: 15,
        min: 6,
    },
    emails: [MailSchema],
    tokens: [TokenSchema]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'Updated_at' } });

// Hooks.HookSave(userSchema);

module.exports = mongoose.model('users', userSchema)