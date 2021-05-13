const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CodeSchema = new Schema({
    qrObject: {
        type: Object
    }
})

const Code = mongoose.model('Code', CodeSchema);
module.exports = Code;