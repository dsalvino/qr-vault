const express = require('express');
const session = require('express-session');
require('dotenv').config()

const mongoose = require('mongoose');
const MongoStore = require('connect-mongodb-session')(session)

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/qrvault', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
});

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        uri: process.env.MONGODB_URI || 'mongodb://localhost/qrvault', collections: 'sessions'
    })
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(session(sess));
app.use(routes);

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
    console.log(`API Server on PORT ${PORT}`);
});
