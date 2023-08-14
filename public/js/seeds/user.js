const { User } = require('../models');

const userData =
[
  {
    "username": "leonis",
    "email": "fghghj@gmail.com",
    "password": "admin12345"
  },
  {
    "username": "saladtini",
    "email": "fggrgr@hotmail.com",
    "password": "password12345"
  },
  {
    "username": "zaconium",
    "email": "fgefrg0@gmail.com",
    "password": "password12345"
  },

]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;