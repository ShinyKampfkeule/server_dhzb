const mongoose = require('mongoose');
const DocumentSchema = require("./DocumentSchema")
const EmergencyContactSchema = require("./EmergencyContactSchema")
const SpecialistDepartmentSchema = require("./SpecialistDepartmentSchema")

const Schema = mongoose.Schema;

const UserSchema = Schema({
    picture: String,
    firstName: String,
    middleName: String,
    secondName: String,
    gender: String,
    nationality: String,
    dateOfBirth: String,
    maritalStatus: String,
    address: String,
    levelOfEducation: String,
    phoneNumber: String,
    personalEmail: String,
    emergencyContact: [EmergencyContactSchema],
    documents: [DocumentSchema],
    dateOfStart: String,
    personalNumber: String,
    appointments: String,
    specialistDepartment: [SpecialistDepartmentSchema],
    workEmail: String,
    password: String,
    taxNumber: String
});

module.exports = UserSchema