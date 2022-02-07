const mongoose = require('mongoose');
const UserSchema = require("./src/mongoDB/schema/UserSchema");
const SpecialistDepartmentSchema = require("./src/mongoDB/schema/SpecialistDepartmentSchema");
const DocumentSchema = require("./src/mongoDB/schema/DocumentSchema");
const TaskSchema = require("./src/mongoDB/schema/TaskSchema")
const ScheduleSchema = require("./src/mongoDB/schema/ScheduleSchema")
const db = require("mongoose");

async function writeDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017', {
            user: 'root',
            pass: 'example',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        mongoose.connection.db.dropDatabase();

        const User = mongoose.model('User', UserSchema);
        const SpecDepartment = mongoose.model('SpecDepartment', SpecialistDepartmentSchema);
        const Document = mongoose.model('Document', DocumentSchema)
        const Task = mongoose.model('Task', TaskSchema)
        const Schedule = mongoose.model('Schedule', ScheduleSchema)

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

        const testUser2 = new User({
            firstName: 'Max',
            secondName: 'Mustermann',
            workEmail: 'mustermann.max@dhzb.de',
            password: 'VXieeeyi+aHgeGOIuGnzTyimTMvDfrhc7rAx/ZZ34G4=',
            task: [{
                title: "Mitarbeiterprofil aktualisieren",
                status: false,
                assignedOn: "29. Januar 2022",
                setReminder: false
            },
            {
                title: "Dokumente hochladen/einreichen",
                status: true,
                assignedOn: "29. Januar 2022",
                setReminder: false
            },
            {
                title: "Ablauf erste Tage betrachten",
                status: false,
                assignedOn: "29. Januar 2022",
                setReminder: false
            },
            {
                title: "Ungelesene Nachrichten lesen",
                status: false,
                assignedOn: "29. Januar 2022",
                setReminder: false
            }]
        })

        const testUser3 = new User({
            firstName: 'Erika',
            middleName: 'Sophia',
            secondName: 'Musterfrau',
            workEmail: 'musterfrau.erika@dhzb.de',
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
                title: "Kontakte betrachten",
                status: false,
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

        await testUser1.save();
        await testUser2.save();
        await testUser3.save();

        const userModel = db.model('users', UserSchema);
        let idKev = await userModel.findOne({firstName: 'Kevin'});
        let idEri = await userModel.findOne({firstName: 'Erika'});
        let idMax = await userModel.findOne({firstName: 'Max'});

        const termin1 = new Schedule({
            title: "Einführung",
            start: new Date(2022, 1, 8, 9, 0),
            end: new Date(2022, 1, 8, 10, 15),
            room: "19.04",
            attendees: [
                `${idKev._id}`,
                `${idEri._id}`,
                `${idMax._id}`
            ],
            host: 'HR'
        })

        const termin2 = new Schedule({
            title: "Besuch Chirurgie",
            start: new Date(2022,1,8,10, 30),
            end: new Date(2022,1,8,12, 0),
            room: "08.15",
            attendees: [
                `${idKev._id}`,
                `${idEri._id}`
            ],
            host: 'Chirurgie'
        })

        await termin1.save();
        await termin2.save();

    } catch (e) {
        console.log(e);
    } finally {
        await mongoose.disconnect();
    }
}

writeDB();