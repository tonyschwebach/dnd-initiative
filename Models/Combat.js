const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CombatSchema = new Schema({
  combatants: [
    {
      character: {
        type: Schema.Types.ObjectId,
        ref: "Character",
      },
      initiativeRolled: {
        type: Number,
        required: "Initiative roll required.",
      },
      totalInitiative: {
        type: Number,
        required: "Initiative required to enter combat.",
      },
    },
  ],
});

const Combat = mongoose.model("Combat", CombatSchema);

module.exports = Combat;
