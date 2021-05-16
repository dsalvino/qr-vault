const qrdb = require('../models/codes');
const axios = require('axios');
const API = "https://api.qr-code-generator.com/v1/create?access-token=" + process.env.API_KEY

module.exports = {
    test: function (req, res) {
        res.send('route working');
    },
    generate: async function (req, res) {
        try {
            const qrResults = await axios.post(API, req.body.qrObj, qrdb.create(req.body));
            // const createDb = await qrdb.create(req.body);

            // console.log(qrResults)
            res.status(200).send(qrResults.data);
        } catch (err) {
            res.status(400).json(err);
        }
    }
}

// qrdb.create(req.body)
//             .then(qrModel => res.json(qrModel))
//             .catch(err => res.status(422).json(err));