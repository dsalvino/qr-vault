const userdb = require('../models/user');

module.exports = {
    signup: async function (req, res) {
        try {
            const userData = await userdb.create(req.body);

            req.session.save(() => {
                req.session.user_id = userData._id;
                req.session.logged_in = true;

                res.status(200).json(userData);
            });
        } catch (err) {
            res.status(400).json(err);
        }
    },
    login: async function (req, res) {
        try {
            const userData = await userdb.findOne({ username: req.body.username }).exec();
            if (!userData) {
                res.status(400).json({ message: "Incorrect username or password, please try again" });
                return;
            }
            userData.comparePasswords(req.body.password, (err, isMatch) => {
                if (err) {
                    res.status(400).json({ message: "Incorrect username or password, please try again" });
                    return;
                }
                if (isMatch) {
                    req.session.save(() => {
                        req.session.user_id = userData.id;
                        req.session.logged_in = true;
                        res.json({ user: userData, message: "You are now logged in!" });
                    });
                }
            });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    logout: function (req, res) {
        if (req.session.logged_in) {
            req.session.destroy(() => {
                res.status(204).end();
            });
        } else {
            res.status(404).end();
        }
    },
    authentication: async function (req, res) {
        if (req.session.logged_in) {
            try {
                const userData = await userdb.findOne({ _id: req.session.user_id });
                if (userData) {
                    res.json(userData);
                } else {
                    res.json(false);
                }
            } catch (err) {
                console.error(err);
            }
        } else {
            res.json(false);
        }
    }
}