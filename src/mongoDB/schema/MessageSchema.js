const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = Schema({
    title: String,
    message: String,
    senderName: String,
    senderEmail: String,
    sendDate: Date,
    receivedDate: Date,
    status: String,
    attachments: Array,
    urgency: String
});

module.exports = MessageSchema