const { User } = require('../models');

const userData =
[
  {
    username: "leo",
    email: "fghghj@gmail.com",
    password: "admin12345",
    profile_pic_url: 'https://www.gravatar.com/avatar/11111111111111111111111111111111?d=mp&f=y',
  },
  {
    username: "saladtini",
    email: "fggrgr@hotmail.com",
    password: "password12345",
    profile_pic_url: "https://www.gravatar.com/avatar/22222222222222222222222222222222?d=mp&f=y"
  },
  {
    username: "zaconium",
    email: "fgefrg0@gmail.com",
    password: "password12345",
    profile_pic_url: "https://www.gravatar.com/avatar/33333333333333333333333333333333?d=mp&f=y"
  },

]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;