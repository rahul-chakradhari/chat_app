const mongoose = require("mongoose");
const messageModel = mongoose.Schema(
  {
    sender: {
      types: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    receiver: {
      types: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    chat: {
      types: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
    },
  },
  {
    timeStamp: true,
  }
);
const Message = mongoose.model("Message", messageModel);
module.exports = Message;
