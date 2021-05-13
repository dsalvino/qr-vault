const userdb = require('../models/user');

module.exports = {
    dashboard: function (req, res) {
        res.send('dashboard');
    },
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
            const userData = await userdb.findOne({ where: { email: req.body.email } });
            if (!userData) {
                res.status(400).json({ message: "Incorrect email or password, please try again" });
                return;
            }
            const validPassword = await userData.checkPassword(req.body.password);
            if (!validPassword) {
                res.status(400).json({ message: "Incorrect email or password, please try again" });
                return;
            }
            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.logged_in = true;
                res.json({ user: userData, message: "You are now logged in!" });
            });
        } catch (err) {
            res.status(400).json(err);
        }
    }
}