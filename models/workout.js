const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSquema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [{
    type: {
        type: String,
        trim:true,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: {
        type: Number,
        required: "Enter the duration of the workout",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      }
  }]
  // type: {
  //   type: String,
  //   trim:true,
  // },
  // name: {
  //   type: String,
  //   trim: true,
  // },
  // duration: {
  //   type: Number,
  //   required: "Enter the duration of the workout",
  // },
  // weight: {
  //   type: Number,
  //   required: "Enter the weight lifted",
  // },
  // reps: {
  //   type: Number,
  //   required: "Enter the number of reps",
  // },
  // sets: {
  //   type: Number,
  //   required: "Enter the number of sets"
  // }
});

const Workout = mongoose.model("Workout", workoutSquema);

module.exports = Workout;
