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
            await qrdb.create({
                label: req.body.label,
                qrCode: qrResults.data,
                qrObj: req.body.qrObj
            });

            res.status(200).send(qrResults.data);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    findOne: async function (req, res) {
        try {
            const response = await qrdb.findById(req.params.id);
            res.status(200).json(response);
        } catch (err) {
            console.error(err);
        }
    },
    remove: async function (req,res) {
        try {
            const response = await qrdb.findOneAndDelete(req.params.id);
            res.status(200).json(response);
        } catch (err) {
            console.error(err);
        }
    }
}
