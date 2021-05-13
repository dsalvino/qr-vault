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
    }
}