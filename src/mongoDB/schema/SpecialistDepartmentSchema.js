const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SpecialistDepartmentSchema = Schema({
    department: String,
    position: String,
    telefonNumber: String
});

module.exports = SpecialistDepartmentSchema