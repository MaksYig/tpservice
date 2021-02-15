const mongoose = require('mongoose');
const AppartSchema = new mongoose.Schema({});

const Appart = mongoose.model('Appart', AppartSchema);

module.exports = Appart;
