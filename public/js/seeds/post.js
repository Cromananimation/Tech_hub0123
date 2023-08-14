const { Post } = require('../models');

const postData = [
    {
        title: "",
        content: "",
        user_id: 1
    },
    {
        title: "",
        content: "",
        user_id: 2
    },
    {
        title: "",
        content: "",
        user_id: 2

    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);