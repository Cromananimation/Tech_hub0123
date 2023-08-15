const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model { }

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
email: {
  type: DataTypes.STRING(255),
  allowNull: false,
  unique: true,
  validate: {
    isEmail: true,
  },
},
    username: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    profile_pic_url: {
      type: DataTypes.STRING(255),
      defaultValue: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
    },
  },
  {
  hooks: {
    beforeCreate: async (newUserData) => {
      newUserData.password = await bcrypt.hash(newUserData.password, 10);
      return newUserData;
    },
  },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;