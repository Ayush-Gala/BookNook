const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  cover_image: { type: String },
  synopsis: { type: String },
});

module.exports = mongoose.model('Book', BookSchema);