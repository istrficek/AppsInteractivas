const Sequelize = require("sequelize");
const User = require('../models').user;

module.exports = {  
    create(req, res) {
      return User
        .create({
          name: req.body.name,
          last_name: req.body.last_name,
          dni: req.body.dni,
          phone: req.body.phone,
          mail: req.body.mail,
          password: req.body.password
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
            mail: req.body.mail,
            password: req.body.password,
          },
        })
        .then((user) => {
          if(user === null){
            res.status(200).send({error: 'Usuario o contraseña incorrectos'})
          }else{
          res.status(200).send(user)
        }
        })
        .catch((error) => res.status(400).send(error));
    }
  };