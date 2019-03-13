let mongoose = require('mongoose');

const server = 'cluster0-shard-00-01-pgooz.gcp.mongodb.net:27017';
const database = 'cluster0';
const user = 'User1';
const password = 'User1';

mongoose.connect('mongodb+srv://User1:<password>@cluster0-pgooz.gcp.mongodb.net/test?retryWrites=true');

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Customer', CustomerSchema);