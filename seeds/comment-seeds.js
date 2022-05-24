const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'I did not realize the power of a README, thanks!',
        user_id: '4',
        post_id: '1'
    },
    {
        comment_text: 'README files suck, I never use them.',
        user_id: '3',
        post_id: '1'
    },
    {
        comment_text: 'Literally use that app everyday.',
        user_id: '3',
        post_id: '2'
    },
    {
        comment_text: 'Connecting to a server side API presented its challenges when I attemped but the results were cool.',
        user_id: '4',
        post_id: '2'
    },
    {
        comment_text: 'I joined one last year and learned a lot. More than I would have if I tried to teach myself how to code.',
        user_id: '6',
        post_id: '3'
    },
    {
        comment_text: 'The exposure alone to different technologies are unmatched. Just find a good that that is worth the price and has optimal resources.',
        user_id: '5',
        post_id: '3'
    },
    {
        comment_text: 'checkout @techteacher and @techbots, they are my favs!',
        user_id: '5',
        post_id: '4'
    },
    {
        comment_text: '@javascripttips is a great one',
        user_id: '1',
        post_id: '4'
    },
    {
        comment_text: 'Thanks for the encouragement!',
        user_id: '1',
        post_id: '5'
    },
    {
        comment_text: 'Exactly what I needed to read.',
        user_id: '2',
        post_id: '5'
    },
    {
        comment_text: 'haha they are but hang in there.',
        user_id: '3',
        post_id: '6'
    },
    {
        comment_text: 'Javascript was definitely a beast, keep going!',
        user_id: '4',
        post_id: '6'
    },
    {
        comment_text: 'You will for sure! Having the MERN stack on the resume is A1.',
        user_id: '6',
        post_id: '7'
    },
    {
        comment_text: 'We are in the same boat pal!',
        user_id: '2',
        post_id: '7'
    },
    {
        comment_text: 'Confidence is key even when you dont feel that way. A poker face goes a long way.',
        user_id: '1',
        post_id: '8'
    },
    {
        comment_text: 'Demonstrate some app, present in a way that shows you know what you are talking about.',
        user_id: '4',
        post_id: '8'
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;