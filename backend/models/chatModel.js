const mongoose = require("mongoose");
const chatModel = mongoose.Schema(
  {
    chatName: {
      type: string,
    },
    isGroupChat: {
      type: Boolean,
    },
    users: [
      {
        types: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      types: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      types: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timeStamp: true,
  }
);
const Chat = mongoose.Model("Chat", chatModel);
module.exports = Chat;
