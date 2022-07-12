const {Schema, model, Types} = require('mongoose');

const UserSignUp = new Schema ({
    email: {type: String, unique: true, require: true},
    password: {type: String, require: true},
    phone_number: {type: String, unique: true, require: true}, 
    last_name: {type: String, require: true}, 
    first_name: {type: String, require: true}, 
    nickname: {type: String, unique: true, require: true}, 
    description: {type: String, require: true}, 
    position: {type: String, require: true},
    companies: [{type: Types.ObjectId, ref: 'Company'}],
    roles: [{type: String, ref: 'Role'}]
});

module.exports = model('UserSignUp', UserSignUp);