'use strict'

const Hash = use('Hash')

/**
*  @var Mongoose mongoose
*/
const mongoose = use('Mongoose')

 
let SiteSchema = mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['travel','hotel','rested','eat_drink','photo']
    },
    photos: [{
        type: string
    }],
    location: {
        type: { type: String, default: 'Point' },
        coordinates: [
            { type: 'Number' },
        ],
    },
    visit: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    }],
    province: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'provinces',
    },
    createBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    },
    detail: {
       type: String,
       required: true,
    },
    comment: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'comments',
    }]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'Updated_at' } });

// Hooks.HookSave(userSchema);

module.exports = mongoose.model('sites', SiteSchema)