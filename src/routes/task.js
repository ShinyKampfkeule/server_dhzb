var express = require('express');
var router = express.Router();
const db = require('mongoose');
const jwt = require('jsonwebtoken');
let UserSchema = require('../mongoDB/schema/UserSchema');

router.post('/', async function(req, res, next) {

    try {

        const token = req.body.token
        const userModel = db.model('users', UserSchema);
        const decoded = jwt.verify(token, 'SuperSecretKey')

        let user = await userModel.findOne({_id: decoded});

        console.log(user)

        if (user === null) {
            res.json({message: 'Token falsch oder abgelaufen'});
        } else {
            res.json({message: 'User gefunden', tasks: user.task});
        }

    }catch (e){

    }

});

module.exports = router;