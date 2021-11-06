const Sequelize = require("sequelize");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const User = require('../models').user;

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
          password: hashedPassword
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
    }
  };