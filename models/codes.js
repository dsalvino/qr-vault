const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CodeSchema = new Schema({
    label: {
        type: String
    },
    qrCode: {
        type: String,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    qrObj: Schema.Types.Mixed
}, { typePojoToMixed: false });

const Code = mongoose.model('Code', CodeSchema);
module.exports = Code;