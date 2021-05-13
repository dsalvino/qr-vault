const express = require('express');
const session = require('express-session');

const mongoose = require('mongoose');
// const MongoStore = new require('connect-mongo')(express)

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    // cookie: {},
    resave: false,
    saveUninitialized: true,
    // store: MongoStore({
    //     db: process.env.MONGODB_URI || 'mongodb://localhost/qrvault'
    // })
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build/build'));
}


app.use(session(sess));
app.use(routes);


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/qrvault');

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
    console.log(`API Server on PORT ${PORT}`);
});
