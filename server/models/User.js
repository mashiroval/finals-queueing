const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  ticketnum: String,
  settled: Boolean,
  attended: Boolean
});

const UserModel = mongoose.model("Queue", UserSchema);
module.exports = UserModel;