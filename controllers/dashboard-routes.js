const router = require('express').Router();
const sequelize = require('../config/connections');
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// Get all posts for dash

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'post_content',
            'created_at'
        ],
        include: [{
            model: Comment, 
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User, 
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }]
    })
    .then(PostData => {
        const posts = PostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggenIn: true });
    });
});