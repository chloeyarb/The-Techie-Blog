const { Post } = require('../models');

const postData = [
    {
        title: 'Benefits of a solid README',
        post_content: 'A quality README takes a developers code to the next level. Take the time to create a quality README file.',
        user_id: '2'
    },
    {
        title: 'Weather app goes viral',
        post_content: 'What started off a simple class assignment is now in the running to being the number 1 weather app in the state!',
        user_id: '1'
    },
    {
        title: 'Coding bootcamp for you?',
        post_content: 'Questioning joining a bootcamp to learn to code? RESEARCH, RESEARCH, RESEARCH! ',
        user_id: '4'
    },
    {
        title: 'Best tech pages on IG',
        post_content: 'In the comments drop your favorite tech related IG pages.',
        user_id: '4'
    },
    {
        title: 'Trust the Process!',
        post_content: 'Learning a new language can be a daughting task, be gentle with yourself. Keep going!',
        user_id: '3'
    },
    {
        title: 'Easiest Coding Language',
        post_content: 'They are all foreign!',
        user_id: '6'
    },
    {
        title: 'React Reactions',
        post_content: 'React is a monster, will I get it? Only time will tell.',
        user_id: '5'
    },
    {
        title: 'Interview Tips',
        post_content: 'Techie community drop some interview prep suggestions in the comment. I have my first software developer interview tomorrow!',
        user_id: '3'
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;