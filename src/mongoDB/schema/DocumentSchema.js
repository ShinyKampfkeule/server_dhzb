const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DocumentSchema = Schema({
    employmentContract: String,
    confidentiality: String,
    itCertificate: String,
    firstAidCertificate: String,
    languageCertificate: String
});

module.exports = DocumentSchema