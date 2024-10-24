const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  ticketnum: String,
  showed: String,
  settled: String
});

const UserModel = mongoose.model("Queue", UserSchema);
module.exports = UserModel;