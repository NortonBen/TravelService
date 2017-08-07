'use strict'

const Hash = use('Hash')

/**
*  @var Mongoose mongoose
*/
const mongoose = use('Mongoose')

const Schema = mongoose.Schema;

const PointSchema =  Schema({
    type: {
        type: String,
        enum: ['start','end','rested','other','photo'],
        default: 'other',
    },
    site: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'sites',
    },
    name: String
}, {
    _id: false
});

const DaySchema = Schema({
    name: {
        type: String,
        required: true,
    },
    points: [PointSchema],
    street: [{
        type: { type: String, default: 'Point' },
        coordinates: [
            { type: 'Number' },
        ],
    }],
}, {
    _id: false
});

const CostDetailSchema = Schema({
    min: {
        type: Number,
        default: 0,
    },
    max: {
        type: Number,
        default: 0,
    },
}, {
    _id : false,
});

const CostSchema = Schema({
    undefinder: {
        type: boolean,
        default: true,
    },
    eat: CostDetailSchema,
    hotel: CostDetailSchema,
    come: CostDetailSchema,
    incurred: CostDetailSchema,
}, {
    _id: false,
});

let RoutesSchema = mongoose.Schema({
    startSite:  {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'sites',
    },
    endSite:  {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'sites',
    },
    days:[DaySchema],
    likes:[{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    }],
    cost: CostSchema,
    createBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'Updated_at' } });

// Hooks.HookSave(userSchema);

module.exports = mongoose.model('routes', RoutesSchema)