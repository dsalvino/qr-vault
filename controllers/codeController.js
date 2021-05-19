const qrdb = require('../models/codes');
const axios = require('axios');
const API = "https://api.qr-code-generator.com/v1/create?access-token=" + process.env.API_KEY

module.exports = {
    findAll: async function (req, res) {
        try {
            const response = await qrdb.find(req.query).sort({ date: -1 });
            res.status(200).json(response);
        } catch (err) {
            console.error(err);
        }
    },
    generate: async function (req, res) {
        try {
            const response = await axios.post(API, req.body.qrObj, qrdb.create(req.body));
            await qrdb.create({
                label: req.body.label,
                qrCode: response.data,
                qrObj: req.body.qrObj
            });
            res.status(200).send(response.data);
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
    remove: async function (req, res) {
        try {
            const response = await qrdb.findOneAndDelete(req.params.id);
            res.status(200).json(response);
        } catch (err) {
            console.error(err);
        }
    },
    call: async function (req, res) {
        try {
            const response = await axios.post(API, req.body);
            res.status(200).send(response.data);
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    }
}
