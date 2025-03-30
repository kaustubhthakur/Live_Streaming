const mongoose = require('mongoose')
const StreamSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description:
    {
        type: String,
        default: " ",
    },
    broadcaster: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: String,
        enum: ['gaming', 'music', 'talk', 'education', 'sports'],
        default: 'gaming'
    },
    status: {
        type: String,
        enum: ['live', 'scheduled', 'ended'],
        default: 'scheduled'
    },
    startTime: {
        type: Date,
        default: Date.now
    },
    endTime:{
        type: Date,
       
    },
    thumbnail: {
        type: String,
        default: ""
    },
    streamKey: {
        type: String,
        unique: true
    },
    hlsUrl: {
        type: String,
        default: "",
    },
    viewers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    maxViewers: {
        type: Number,
        default: 0
    },
    tags: {
        type: [String],
        default: [],
    },
    isPrivate: {
        type: Boolean,
        default: false
    },
    chat: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ChatMessage'
    }]
})
module.exports = mongoose.model("Stream", StreamSchema);