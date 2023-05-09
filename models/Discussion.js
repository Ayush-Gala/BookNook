const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = require('./Comment');

const DiscussionSchema = new Schema({
  book_id: { type: Schema.Types.ObjectId, ref: 'Book' },
  title: { type: String, required: true },
  author_id: { type: Schema.Types.ObjectId, ref: 'User' },
  author:{ type: String, default: 'Anonymous'},
  created_at: { type: Date, default: Date.now() },
  comments: [CommentSchema],
});

module.exports = mongoose.model('Discussion', DiscussionSchema);
