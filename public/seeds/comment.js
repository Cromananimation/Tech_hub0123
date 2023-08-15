const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Awesome",
        user_id: 1,
        post_id: 3,
        
    },
    {
        comment_text: "Tech savvy",
        user_id: 2,
        post_id: 5,
        
    },
    {
        comment_text: "Tech is the future",
        user_id: 3,
        post_id: 1,
        
    },

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;