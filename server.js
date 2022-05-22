const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connections');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUnitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));
app.use(routes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Listening'));
});