const mongoose = require('mongoose');
const UserSchema = require("./src/mongoDB/schema/UserSchema");
const SpecialistDepartmentSchema = require("./src/mongoDB/schema/SpecialistDepartmentSchema");
const DocumentSchema = require("./src/mongoDB/schema/DocumentSchema");
const TaskSchema = require("./src/mongoDB/schema/TaskSchema")
const ScheduleSchema = require("./src/mongoDB/schema/ScheduleSchema")
const MessageSchema = require("./src/mongoDB/schema/MessageSchema")
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
        const Messgae = mongoose.model('Message', MessageSchema)

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
                status: false,
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
                status: false,
                assignedOn: "29. Januar 2022",
                setReminder: false
            },
            {
                title: "Notfallkontakt hinterlegen",
                status: false,
                assignedOn: "29. Januar 2022",
                setReminder: false
            }],
            messages: [{
                title: "Teams-Link",
                message: "Hier der Link für die morgige Session.",
                senderName: "Prof. Dr. Sam Fischer",
                senderEmail: "fischer.sam@dhzb.de",
                sendDate: new Date(2022, 2, 10, 18, 37),
                receivedDate: new Date(2022, 2, 10, 18, 39),
                status: "unread",
                attachments: [],
                urgency: "normal"
            },
            {
                title: "Erinnerung: Dokumente hochladen",
                message: "Bitte laden Sie bis spätestens 25.03.2022 folgende Dokumente hoch: Arbeitsvertrag, Verschwiegenheitserklärung, Personalfragebogen",
                senderName: "Jutta Grün (HR)",
                senderEmail: "gruen.jutta@dhzb.de",
                sendDate: new Date(2022, 2, 5, 8, 22),
                receivedDate: new Date(2022, 2, 5, 8, 23),
                status: "unread",
                attachments: ["kalendereintrag", "arbeitsvertrag", "verschwiegenheitserklärung", "personalfragebogen"],
                urgency: "urgent"
            },
            {
                title: "Willkommen im Unternehmen",
                message: "Sehr geehrter Herr Lehmann, ich begrüße Sie als neuen Mitarbeiter bei der DHZB. Viel Spaß und Erfolg !",
                senderName: "Prof. Dr. Julius Winterkorn",
                senderEmail: "winterkorn.julius@dhzb.de",
                sendDate: new Date(2022, 1, 8, 8, 0),
                receivedDate: new Date(2022, 1, 8, 8, 5),
                status: "unread",
                attachments: [],
                urgency: "normal"
            },
            {
                title: "Erinnerung: Foto für Poststelle hochladen",
                message: "Bitte laden Sie bis spätestens 25.03.2022 folgende Dokumente hoch: Foto",
                senderName: "Poststelle",
                senderEmail: "poststelle@dhzb.de",
                sendDate: new Date(2022, 1, 4, 9, 17),
                receivedDate: new Date(2022, 1, 4, 9, 18),
                status: "unread",
                attachments: ["kalendereintrag", "fotobeispiel"],
                urgency: "urgent"
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
            }],
            messages: [{
                title: "Teams-Link",
                message: "Hier der Link für die morgige Session.",
                senderName: "Prof. Dr. Sam Fischer",
                senderEmail: "fischer.sam@dhzb.de",
                sendDate: new Date(2022, 2, 10, 18, 37),
                receivedDate: new Date(2022, 2, 10, 18, 39),
                status: "unread",
                attachments: [],
                urgency: "normal"
            },
            {
                title: "Erinnerung: Dokumente hochladen",
                message: "Bitte laden Sie bis spätestens 25.03.2022 folgende Dokumente hoch: Arbeitsvertrag, Verschwiegenheitserklärung, Personalfragebogen",
                senderName: "Jutta Grün (HR)",
                senderEmail: "gruen.jutta@dhzb.de",
                sendDate: new Date(2022, 2, 5, 8, 22),
                receivedDate: new Date(2022, 2, 5, 8, 23),
                status: "unread",
                attachments: ["kalendereintrag", "arbeitsvertrag", "verschwiegenheitserklärung", "personalfragebogen"],
                urgency: "urgent"
            },
            {
                title: "Willkommen im Unternehmen",
                message: "Sehr geehrte Frau Musterfrau, ich begrüße Sie als neuen Mitarbeiter bei der DHZB. Viel Spaß und Erfolg !",
                senderName: "Prof. Dr. Julius Winterkorn",
                senderEmail: "winterkorn.julius@dhzb.de",
                sendDate: new Date(2022, 1, 8, 8, 0),
                receivedDate: new Date(2022, 1, 8, 8, 5),
                status: "read",
                attachments: [],
                urgency: "normal"
            },
            {
                title: "Erinnerung: Foto für Poststelle hochladen",
                message: "Bitte laden Sie bis spätestens 25.03.2022 folgende Dokumente hoch: Foto",
                senderName: "Poststelle",
                senderEmail: "poststelle@dhzb.de",
                sendDate: new Date(2022, 1, 4, 9, 17),
                receivedDate: new Date(2022, 1, 4, 9, 18),
                status: "unread",
                attachments: ["kalendereintrag", "fotobeispiel"],
                urgency: "urgent"
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
            }],
            messages: [{
                title: "Teams-Link",
                message: "Hier der Link für die morgige Session.",
                senderName: "Prof. Dr. Sam Fischer",
                senderEmail: "fischer.sam@dhzb.de",
                sendDate: new Date(2022, 2, 10, 18, 37),
                receivedDate: new Date(2022, 2, 10, 18, 39),
                status: "unread",
                attachments: [],
                urgency: "normal"
            },
            {
                title: "Erinnerung: Dokumente hochladen",
                message: "Bitte laden Sie bis spätestens 25.03.2022 folgende Dokumente hoch: Arbeitsvertrag, Verschwiegenheitserklärung, Personalfragebogen",
                senderName: "Jutta Grün (HR)",
                senderEmail: "gruen.jutta@dhzb.de",
                sendDate: new Date(2022, 2, 5, 8, 22),
                receivedDate: new Date(2022, 2, 5, 8, 23),
                status: "unread",
                attachments: ["kalendereintrag", "arbeitsvertrag", "verschwiegenheitserklärung", "personalfragebogen"],
                urgency: "urgent"
            },
            {
                title: "Willkommen im Unternehmen",
                message: "Sehr geehrter Herr Mustermann, ich begrüße Sie als neuen Mitarbeiter bei der DHZB. Viel Spaß und Erfolg !",
                senderName: "Prof. Dr. Julius Winterkorn",
                senderEmail: "winterkorn.julius@dhzb.de",
                sendDate: new Date(2022, 1, 8, 8, 0),
                receivedDate: new Date(2022, 1, 8, 8, 5),
                status: "unread",
                attachments: [],
                urgency: "normal"
            },
            {
                title: "Erinnerung: Foto für Poststelle hochladen",
                message: "Bitte laden Sie bis spätestens 25.03.2022 folgende Dokumente hoch: Foto",
                senderName: "Poststelle",
                senderEmail: "poststelle@dhzb.de",
                sendDate: new Date(2022, 1, 4, 9, 17),
                receivedDate: new Date(2022, 1, 4, 9, 18),
                status: "unread",
                attachments: ["kalendereintrag", "fotobeispiel"],
                urgency: "urgent"
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
            start: new Date(2022, 1, 8, 9, 15),
            end: new Date(2022, 1, 8, 10, 30),
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