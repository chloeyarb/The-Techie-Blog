const { User } = require('../models');

const userData = [
    {
        username: 'kellz',
        email: 'kelly@isicool.com',
        password: 'hellothere'
    },
    {
        username: 'candiecane',
        email: 'candes@isicool.com',
        password: 'hellothere'
    },
    {
        username: 'coachkev',
        email: 'kevin@isicool.com',
        password: 'hellothere'
    },
    {
        username: 'melis',
        email: 'mel@isicool.com',
        password: 'hellothere'
    },
    {
        username: 'gbear',
        email: 'gloria@isicool.com',
        password: 'hellothere'
    },
    {
        username: 'meekman',
        email: 'meek@isicool.com',
        password: 'hellothere'
    },    
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true });

module.exports = seedUsers;
