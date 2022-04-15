const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', (req, res) => {
    Comment.findAll()
    .then(CommentData => res.json(CommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {

})

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {
    Comment.destory({
        where: {
            id: req.params.id
        }
    })
    .then(CommentData => {
        if (!CommentData) {
            res.status(404).json({ message: 'Comment not found.'});
            return;
        }
        res.json(CommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })

});


module.exports = router;
