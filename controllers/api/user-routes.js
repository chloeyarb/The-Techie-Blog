const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

//get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password' ]}
    })
      .then(UserData => res.json(UserData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
})

//get one user by id
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password' ]},
        where: {
            id: req.params.id
        }, 
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'post_content', 'created_at']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at'],
                include: {
                    model: Post,
                    attributes: ['title']
                }
            }
        ]
    })
    .then(UserData => {
        if (!UserData) {
            res.status(404).json({ message: 'User not found.'})
            return;
        }
        res.json(UserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create user
router.post('/', (req, res) => {
    console.log(req.body);
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(UserData => {
        req.session.save(() => {
            req.session.user_id = UserData.id;
            req.session.username = UserData.username;
            req.session.loggedIn = true;

            res.json(UserData);
        })
    })
    .catch(err => {
        console.log(err),
        res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(UserData => {
        if(!UserData) {
            res.status(400).json({message: 'Username not found.'});
            return;
        }
        const validPassword = UserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(404).json({message: 'Invalid password.'});
            return;
        }
        req.session.save(() => {
            req.session.user_id = UserData.id;
            req.session.username = UserData.username;
            req.session.loggedIn = true;

            res.json({user: UserData, message: 'You are logged in.'});
        });
    });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(()=> {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(UserData => {
        if(!UserData[0]) {
            res.status(404).json({ message: 'User not found.'});
            return;
        }
        res.json(UserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(UserData => {
        if(!UserData) {
            res.status(404).json({ message: 'User not found'});
            return;
        }
        res.json(UserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;