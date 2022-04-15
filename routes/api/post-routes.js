const router = require('express').Router();
const { Post } = require('../../models');

router.get('/', (req, res) => {
    Post.findAll({
        

    })
})

router.get('/:id', (req, res) => {
    Post.findOne({

    })
})

router.post('/', (req, res) => {
    Post.create({

    })
})

router.put('/:id', (req, res) => {
    Post.update({

    })
})

router.delete('/:id', (req, res) =>{
    Post.destroy({

    })
})

module.exports = router;