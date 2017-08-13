'use strict'

/**
*  @var Mongoose mongoose
*/
const mongoose = use('Mongoose')

const Schema = mongoose.Schema;

const DataSchema = Schema({
    text: {
        type: String,
        required: true
    },
    photo:[
        {
            type: String,
        }
    ],
    idTo: {
        type: Schema.Types.ObjectId,
        required: true
    },
    link: {
        type: String,
        required: true,
    }
},{
    _id: false
});


let PostSchema = mongoose.Schema({
    type: {
        type: String,
        enum: ['text','photo','travel','link','post']
    },
    data: DataSchema,
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    },
    comments: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'comments',
    }],
    likes: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    }],
    share: {
        type: String,
        enum: ['everyone','only_me','friend'],
        default: 'friend',
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'Updated_at' } });

// Hooks.HookSave(userSchema);

module.exports = mongoose.model('posts', PostSchema)