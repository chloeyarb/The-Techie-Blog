// All user facing routes i.e. homepage and login

const router = require('express').Router();
const sequelize = require('../config/connections');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    // rendering the homepage handlebar template
    Post.findAll({
        attributes: [
            'id',
            'title',
            'content',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id', 'post_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }

            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(postData => {
            const posts = postData.map(post => post.get({ plain: true }));
            res.render('homage', { posts, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;