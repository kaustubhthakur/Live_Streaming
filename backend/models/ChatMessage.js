const mongoose = require('mongoose')

const ChatMessageSchema = new mongoose.Schema({
    stream: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Stream',
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500
    },
    timestamp: {
      type: Date,
      default: Date.now
    },
    type: {
      type: String,
      enum: ['text', 'donation', 'moderation'],
      default: 'text'
    },
    metadata: mongoose.Schema.Types.Mixed
  });
  module.exports = mongoose.model("ChatMessage",ChatMessageSchema)