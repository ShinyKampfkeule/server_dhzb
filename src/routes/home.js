var express = require('express');
var router = express.Router();
const db = require('mongoose');
const jwt = require('jsonwebtoken');
let userSchema = require('../mongoDB/schema/UserSchema');
let scheduleSchema = require('../mongoDB/schema/ScheduleSchema');

router.post('/', async function(req, res, next) {

    try {

        const token = req.body.token;
        const userModel = db.model('users', userSchema);
        const scheduleModel = db.model('schedule', scheduleSchema);
        const decoded = jwt.verify(token, 'SuperSecretKey');

        let user = await userModel.findOne({_id: decoded});
        let schedules = await scheduleModel.find({attendees: decoded})

        const tasks = [];
        const messages = [];

        user.task.map(e => {
            if (e.status === false) {
                tasks.push(e)
            }
        });

        user.messages.map(e => {
            if (e.status === "unread") {
                messages.push(e)
            }
        })

        res.json({task: tasks, schedule: schedules, messages: messages})

    }catch (e){

    }

});

module.exports = router;