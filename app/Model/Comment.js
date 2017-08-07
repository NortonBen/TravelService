'use strict'

/**
*  @var Mongoose mongoose
*/
const mongoose = use('Mongoose')

 
let CommentSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    createBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    },
    parentComment: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'comments',
    },
    likes: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    }],
});

// Hooks.HookSave(userSchema);

module.exports = mongoose.model('comments', CommentSchema)