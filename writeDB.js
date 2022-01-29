const mongoose = require('mongoose');
const UserSchema = require("./src/mongoDB/schema/UserSchema");
const SpecialistDepartmentSchema = require("./src/mongoDB/schema/SpecialistDepartmentSchema");
const DocumentSchema = require("./src/mongoDB/schema/DocumentSchema");
const TaskSchema = require("./src/mongoDB/schema/TaskSchema")

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
        const Task = mongoose.model('Task', TaskSchema)

        const testUser1 = new User({
            firstName: 'Kevin',
            middleName: 'Christopher',
            secondName: 'Lehmann',
            workEmail: 'lehmann.kevin@dhzb.de',
            password: 'VXieeeyi+aHgeGOIuGnzTyimTMvDfrhc7rAx/ZZ34G4=',
            task: [{
                title: "Mitarbeiterprofil aktualisieren",
                status: true,
                assignedOn: "29. Januar 2022",
                setReminder: false
            },
            {
                title: "Dokumente hochladen/einreichen",
                status: false,
                assignedOn: "29. Januar 2022",
                setReminder: false
            },
            {
                title: "Ablauf erste Tage betrachten",
                status: true,
                assignedOn: "29. Januar 2022",
                setReminder: false
            },
            {
                title: "Ungelesene Nachrichten lesen",
                status: false,
                assignedOn: "29. Januar 2022",
                setReminder: false
            },
            {
                title: "Kontakte betrachten",
                status: true,
                assignedOn: "29. Januar 2022",
                setReminder: false
            },
            {
                title: "Notfallkontakt hinterlegen",
                status: false,
                assignedOn: "29. Januar 2022",
                setReminder: false
            }]
        })

        mongoose.connection.db.dropDatabase();

        await testUser1.save();

    } catch (e) {
        console.log(e);
    } finally {
        await mongoose.disconnect();
    }
}

writeDB();