'use strict'
/**
*  @var Mongoose mongoose
*/
const mongoose = use('Mongoose')

 
let ProvinceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: { type: String, default: 'Point' },
        coordinates: [
            { type: 'Number' },
        ],
    },
    detail: {
        type: String
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'Updated_at' } });

// Hooks.HookSave(userSchema);

module.exports = mongoose.model('provinces', ProvinceSchema)