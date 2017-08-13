'use strict'

/**
*  @var Mongoose mongoose
*/
const mongoose = use('Mongoose')

const rootSchema = Schema({
    name: {
        type: String,
        required: true,
    }, 
    star: {
        type: Number,
        max: 5,
        min: 0,
        required: true,
        default: 1,
    },
    cost: {
        type: Number,
        required: true,
        default: 0,
    }
}, {
    _id:  false,
});


let HotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    site: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'sites',
    },
    rooms: [rootSchema],
    phones: [{
        type: String
    }],
    address: {
        type: String
    },
    detail: {
        type: String
    },
    likes: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    }],
});

// Hooks.HookSave(userSchema);

module.exports = mongoose.model('hotels', HotelSchema)