const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  type: String,
  ticketnum: String,
  showed: String,
  settled: Boolean
});

const UserModel = mongoose.model("Queue", UserSchema);
module.exports = UserModel;