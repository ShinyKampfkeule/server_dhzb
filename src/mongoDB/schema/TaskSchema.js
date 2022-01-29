const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = Schema({
    title: String,
    status: Boolean,
    assignedOn: String,
    setReminder: Boolean
});

module.exports = TaskSchema