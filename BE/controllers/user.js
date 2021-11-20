const Sequelize = require("sequelize");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const User = require('../models').user;
const UserService = require('../services/UserService');

module.exports = {  
    create(req, res) {
      var hashedPassword = bcrypt.hashSync(req.body.password, 8);
      return User
        .create({
          name: req.body.name,
          last_name: req.body.last_name,
          dni: req.body.dni,
          phone: req.body.phone,
          mail: req.body.mail,
          password: hashedPassword,
          picture: req.body.picture
        })
        .then((user) => res.status(200).send(user))
        .catch((error) => res.status(400).send(error));
    },
    list(_, res) {
      return User
        .findAll({})
        .then((user) => res.status(200).send(user))
        .catch((error) => res.status(400).send(error));
    },    
    logIn(req, res) {
      return User
        .findOne({
          include: [{ all: true, nested: true }],
          where: {
            mail: req.body.mail
          },
        })
        .then((user) => {
          if(user) {
            var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (passwordIsValid) {
              var token = jwt.sign({
                id: user.id
              }, process.env.SECRET, {
                  expiresIn: 86400 // expires in 24 hours
              });
              user.password = ''; 
              res.status(200).send({token: token, user: user})
            }
          }
          res.status(200).send({error: 'Usuario o contraseña incorrectos'})          
        })
        .catch((error) => res.status(400).send(error));
    },
    get(req, res) {
      return User
        .findOne({
          include: [{ all: true, nested: true }],
          where: {
            id: req.params.id
          },
        })
        .then((user) => res.status(200).send(user))
        .catch((error) => { 
          console.log('Error getting user' + error);
          res.status(200).send({error: 'Error obteniendo usuario'})   
        })
    },
    updateImage(req, res) {
      UserService.updateImage(req.body)
        .then((success) => { res.status(200).send({status: 'Success'}) })
        .catch((error) => {
          console.log(error);
          res.status(200).send({status: 'Error', message: error});
        })
    },
    getByDNI(req,res) {
      UserService.getByDNI(req.params.dni)
        .then((result) => {
          if(result === null) {
            res.status(200).send({status: 'Ok', found: false});
          } else {
            res.status(200).send({status: 'Ok', found: true});
          }
        })
    },    
  };