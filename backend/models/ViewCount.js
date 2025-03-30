const mongoose = require('mongoose')
const ViewCountSchema = new mongoose.Schema({
    stream:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stream",
        required: true
    },
    timestamp:
    {
        type: Date,
        default: Date.now
    },
    count:
    {
        type: Number,
        required: true
    },
});
module.exports = mongoose.model("ViewCount", ViewCountSchema)