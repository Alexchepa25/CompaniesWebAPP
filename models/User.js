const {Schema, model, Types} = require('mongoose');

const User = new Schema ({
    username: {type: String, unique: true, require: true},
    email: {type: String, unique: true, require: true},
    password: {type: String, require: true},
    companies: [{type: Types.ObjectId, ref: 'Company'}],
    roles: [{type: String, ref: 'Role'}]
});

module.exports = model('User', User);