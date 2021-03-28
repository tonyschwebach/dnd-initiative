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
  characterClass: {
    type: String,
  },
  avatarUrl: {
    type: String,
    default:
      "https://www.dndbeyond.com/content/skins/waterdeep/images/characters/default-avatar-builder.png",
  },
  initiativeModifier: {
    type: Number,
  },
});

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;
