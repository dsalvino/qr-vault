const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const CodeSchema = new Schema({ any: Object });

const CodeSchema = new Schema({
    label: {
        type: String,
        // required: true
    },
    qrObj: Schema.Types.Mixed
}, { typePojoToMixed: false });

const Code = mongoose.model('Code', CodeSchema);
module.exports = Code;