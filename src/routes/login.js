var express = require('express');
var router = express.Router();
const db = require('mongoose');
const jwt = require('jsonwebtoken');
let userSchema = require('../mongoDB/schema/UserSchema');

router.get('/', async function(req, res, next) {

  try {

    const email = req.query.email;
    const password = req.query.password;
    const userModel = db.model('users', userSchema);

    let user = await userModel.findOne({workEmail: email});

    if (user === null) {
      res.json({message: 'Falscher Benutzername oder Passwort !'});
    } else if (password === user.password) {
      let token = jwt.sign(user._id.toHexString(), 'SuperSecretKey');
      let username = `${user.firstName} ${user.middleName} ${user.secondName}`
      res.json({message: 'User found', token: token, username: username});
    } else {
      res.json({message: 'Falscher Benutzername oder Passwort !'});
    }

  }catch (e){

  }

});

module.exports = router;
