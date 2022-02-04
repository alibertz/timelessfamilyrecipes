import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema({
  groupName: String,
  members: Array,
  groupType: String,
});

module.exports = mongoose.models.Group || mongoose.model("Group", GroupSchema);
