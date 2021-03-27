const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  dndBeyondId: {
    type: Number,
    trim: true,
  },
  name: {
    type: String,
    required: "Characters must have names.",
  },
  type: {
    type: String,
    required: "Player or NPC?",
  },
  race: {
    type: String,
  },
  class: {
    type: String,
  },
  avatarUrl: {
    type: String,
  },
  initiativeModifier: {
    type: Number,
  },
});

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;
