const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  text: { type: String },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comment', CommentSchema);
