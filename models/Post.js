const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
      post_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      poster_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id'
        }
      },
      likes: {
        type: DataTypes.INTEGER,
        default: 0,
      },
      text_content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      media_url: {
        type: DataTypes.STRING(255),
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      timestamps: false,
      modelName: 'post',
    }
  );
  
  module.exports = Post;