const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Company
let Company = new Schema({
  person_name: {
    type: String
  },
  company_name: {
    type: String
  },
  company_id_number: {
    type: Number
  }
},{
    collection: 'company'
});

module.exports = mongoose.model('Company', Company);