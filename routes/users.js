var express = require('express');
var router = express.Router();
const User = require('../database/models/index').User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll().then( (result) => res.json(result) )
});

router.post('/register', function(req, res, next){

    User.create({
      id_user: req.body.id_user,
      nickname: req.body.nickname,
      name: req.body.name,
      firstLastName: req.body.firstLastName,
      secondLastName: req.body.secondLastName,
      password: req.body.password,
      email: req.body.email,
      datebirth: req.body.datebirth,
      gender: req.body.gender,
      sexualPreference: req.body.sexualPreference
    }).then( (result) => res.json(result) );
  // res.send('Registro Exitoso');
});

router.put('/', function(req, res, next){

});

router.delete('/', function(req, res, next){

});

module.exports = router;
