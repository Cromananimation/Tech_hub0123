const { Post } = require('../models');

const postData = [
  {
    title: "This is the first post.",
    poster_id: 1,
    likes: 5,
    text_content: "This is the first post's text content.",
    media_url: 'https://example.com/image1.jpg',
  },
  {
    title: "This is the second post.",
    poster_id: 2,
    likes: 10,
    text_content: "This is the second post's text content.",
    media_url: 'https://example.com/image2.jpg',
  },
];


const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;