const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmergencyContactSchema = Schema({
    firstName: String,
    middleName: String,
    secondName: String,
    phoneNumber: String,
    address: String
});

module.exports = EmergencyContactSchema