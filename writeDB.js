const mongoose = require('mongoose');
const UserSchema = require("./src/mongoDB/schema/UserSchema");
const SpecialistDepartmentSchema = require("./src/mongoDB/schema/SpecialistDepartmentSchema");
const DocumentSchema = require("./src/mongoDB/schema/DocumentSchema");

async function writeDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017', {
            user: 'root',
            pass: 'example',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        const User = mongoose.model('User', UserSchema);
        const SpecDepartment = mongoose.model('SpecDepartment', SpecialistDepartmentSchema);
        const Document = mongoose.model('Document', DocumentSchema)

        const testUser1 = new User({
            firstName: 'Kevin',
            middleName: 'Christopher',
            secondName: 'Lehmann',
            workEmail: 'lehmann.kevin@dhzb.de',
            password: 'passwort123',
        })

        mongoose.connection.db.dropDatabase('users');

        await testUser1.save();

    } catch (e) {
        console.log(e);
    } finally {
        await mongoose.disconnect();
    }
}

writeDB();