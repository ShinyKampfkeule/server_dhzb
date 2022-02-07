const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ScheduleSchema = Schema({
    title: String,
    start: Date,
    end: Date,
    room: String,
    attendees: Array,
    host: String
});

module.exports = ScheduleSchema