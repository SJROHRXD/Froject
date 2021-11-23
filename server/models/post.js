const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  name: String,
  //todo the applicants Should be an array of applicants
  applicants: String, 
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;