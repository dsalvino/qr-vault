const qrdb = require('../models/codes');
const axios = require('axios');
const API = "https://api.qr-code-generator.com/v1/create?access-token=" + process.env.API_KEY

module.exports = {
    test: function (req, res) {
        res.send('route working');
    },
    generate: function (req, res) {
        
    }
}

// qrdb.create(req.body)
//             .then(qrModel => res.json(qrModel))
//             .catch(err => res.status(422).json(err));