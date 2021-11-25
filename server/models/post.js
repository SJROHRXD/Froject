const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  name: {
    type: String,
    required: true, 
    trim: true, 
    unique: true
  },
  //Enable this if we decide to add functionality to search by posts
  // applicants: [
  //   {
  //     type: Schema.Types.ObjectId, 
  //     ref: 'Applicant'
  //   }
  // ]
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;