// import models
const User = require('./user');
const Post = require('./Post');
const Comment = require('./Comment');

// Users have many Posts
User.hasMany(Post, { foreignKey: 'user_id' });
User.hasMany(Comment, { foreignKey: 'user_id' });
// Each Post belongs to a User
Post.belongsTo(User, { foreignKey: 'user_id' });

Post.hasMany(Comment, { foreignKey: 'post_id' });
// Users have many Comments
// Each Comment belongs to a User
Comment.belongsTo(User, { foreignKey: 'user_id' });

// Each Post can have many Comments
// Each Comment belongs to a Post
Comment.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = {
  User,
  Post,
  Comment,
};
