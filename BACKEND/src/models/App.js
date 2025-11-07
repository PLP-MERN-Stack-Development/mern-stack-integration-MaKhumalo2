const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, //optional (frontend passes it)
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  timestamps: true,
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
