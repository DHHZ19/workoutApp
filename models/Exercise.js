const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  exercise: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  timeForWorkout: {
    type: Number,
  },
});

module.exports = mongoose.model("Exercise", ExerciseSchema);
