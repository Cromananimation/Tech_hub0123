const { Comment } = require('../models');
  
const commentData = [
                {
                  comment_text: "A lot like Trigonometry in the 3rd grade",
                  user_id: 2,
                  post_id: 1,
                },
                {
                  comment_text: "I agree it's a lot like Trigonometry in the 3rd grade, but I had it in 2nd grade",
                  user_id: 4,
                  post_id: 1,
                },
                {
                  comment_text: "is the world a 3-dimensional plane or a 4-dimensional space?",
                  user_id: 4,
                  post_id: 1,
                },
                { 
                  comment_text: "Yes?",
                  user_id: 3,
                  post_id: 1,
                },
                { 
                  comment_text: "NO",
                  user_id: 1,
                  post_id: 1,
                },
                {
                  comment_text: "Its a lot like the first blog post, insane....",
                  user_id: 1,
                  post_id: 2,
                }
]
const seedComments = async () => {
  await Comment.bulkCreate(commentData);
};
module.exports = seedComments