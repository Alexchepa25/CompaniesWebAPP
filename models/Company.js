const {Schema, model, Types} = require('mongoose');

const Company = new Schema({
  name: {type: String, required: true},
  address: {type: String, required: true},
  service_of_activity: {type: String, required: true},
  number_of_employees: {type: String, required: true},
  description: {type: String, required: true},
  type: {type: String, required: true},
  owner: {type: Types.ObjectId, ref: 'User'}
});

module.exports = model('Company', Company);
