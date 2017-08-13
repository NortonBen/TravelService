'use strict'

/**
*  @var Mongoose mongoose
*/
const mongoose = use('Mongoose')

const Schema = mongoose.Schema;

const texSchema = Schema({
    text: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        enum: ['send','view'],
    }
}, {
    _id: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'Updated_at' }
});


let MessageSchema = mongoose.Schema({
    user: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    }],
    messages: [texSchema],
}, { timestamps: { createdAt: 'created_at' } });
// Hooks.HookSave(userSchema);

module.exports = mongoose.model('messages', MessageSchema)