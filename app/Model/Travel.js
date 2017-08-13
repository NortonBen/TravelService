'use strict'

/**
*  @var Mongoose mongoose
*/
const mongoose = use('Mongoose')

const Schema = mongoose.Schema;

let TravelSchema = mongoose.Schema({
    route: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'routes',
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    },
    name: {
         type: String,
        required: true,
    },
    detail: {
        type: String,
        required: true,
    },
    detail: {
        type: String,
        required: true,
    },
    comment: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'comments',
    }],
    createBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    },
    participation: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    }],
    await_access: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    }],
    invite: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    }],
    join: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    }],
    editBy:[{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    }],
    all_permission: {
        type: boolean,
        default: true,
    },
    auto_access: {
        type: boolean,
        default: false,
    },
    public: {
        type: boolean,
        default: true,
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'Updated_at' } });

// Hooks.HookSave(userSchema);

module.exports = mongoose.model('travels', TravelSchema)