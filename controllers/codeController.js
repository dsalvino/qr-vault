const qrdb = require('../models/codes');
const axios = require('axios');
const API = "https://api.qr-code-generator.com/v1/create?access-token=" + process.env.API_KEY

module.exports = {
    test: function (req, res) {
        res.send('route working');
    },
    generate: async function (req, res) {
        try {
            const qrResults = await axios.post(API, req.body.qrObj);
            // console.log(qrResults)
            return res.json(qrResults.data);
        } catch (err) {
            console.error(err);
        }
    }
}

// qrdb.create(req.body)
//             .then(qrModel => res.json(qrModel))
//             .catch(err => res.status(422).json(err));