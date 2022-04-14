const router = require('express').Router();
const { User } = require('../../models');

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

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password' ]},
        where: {
            id: req.params.id
        }
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

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(UserData => res.json(UserData))
    .catch(err => {
        console.log(err),
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    User.update(req.body, {
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