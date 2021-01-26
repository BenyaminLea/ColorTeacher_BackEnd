const mongoose = require("mongoose");

Schema = mongoose.Schema;

const GameSchema = new Schema({
  level1_Colors: [
    {
      type: String,
    },
  ],
  level2_Colors: [
    {
      type: String,
    },
  ],
  level3_Colors: [
    {
      type: String,
    },
  ],
  level4_Colors: [
    {
      type: String,
    },
  ],

  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = users = mongoose.model("Games", GameSchema);
