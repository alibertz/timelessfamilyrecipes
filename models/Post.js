import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
});

module.exports = mongoose.models.Post || mongoose.model("Post", PostSchema);
