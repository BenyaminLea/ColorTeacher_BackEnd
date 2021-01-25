const mongoose = require("mongoose");

Schema = mongoose.Schema;

const GameSchema = new Schema({
  Colors: [
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
