const Exercise = require("../models/Exercise");
const ExerciseProfile = require("../models/ExerciseProfile");
module.exports = {
  getExercise: async (req, res) => {
    try {
      const exerciseItems = await Exercise.find({ userId: req.user.id });
      const exerciseProfileItems = await ExerciseProfile.find({ userId: req.user.id, selected: true});
      const itemsLeft = await Exercise.countDocuments({
        userId: req.user.id,
        completed: false,
      });
      res.render("todos.ejs", {
        todos: exerciseItems,
        left: itemsLeft,
        user: req.user,
        exerciseProfile: exerciseProfileItems
      });
    } catch (err) {
      console.log(err);
    }
  },
  createExercise: async (req, res) => {
    try {
      await Exercise.create({
        exercise: req.body.exercise,
        completed: false,
        userId: req.user.id,
        timeForWorkout: req.body.timeForWorkout,
      });
      console.log("Todo has been added!");
      res.redirect("/todos");
    } catch (err) {
      console.log(err);
    }
  },
  markComplete: async (req, res) => {
    try {
      await Exercise.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        {
          completed: true,
        }
      );
      console.log("Marked Complete");
      res.json("Marked Complete");
    } catch (err) {
      console.log(err);
    }
  },
  markIncomplete: async (req, res) => {
    try {
      await Exercise.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        {
          completed: false,
        }
      );
      console.log("Marked Incomplete");
      res.json("Marked Incomplete");
    } catch (err) {
      console.log(err);
    }
  },
  deleteExercise: async (req, res) => {
    console.log(req.body.todoIdFromJSFile);
    try {
      await Exercise.findOneAndDelete({ _id: req.body.todoIdFromJSFile });
      console.log("Deleted Todo");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
  createExerciseProfile: async (req, res) => {
    try {
      await ExerciseProfile.create({
        exerciseTitle: req.body.exerciseTitle,
        exerciseItem: req.body.exerciseItem,
        completed: false,
        userId: req.user.id,
        timeForWorkout: req.body.timeForWorkout,
        selected: false,
      });
      res.redirect('/todos/workouts')
    } catch (error) {
      console.error(error);
    }
  },
  getWorkouts: async (req, res) => {
    try {
      const exerciseItems = await Exercise.find({ userId: req.user.id });
      const exerciseProfileItems = await ExerciseProfile.find({ userId: req.user.id });
      const itemsLeft = await Exercise.countDocuments({
        userId: req.user.id,
        completed: false,
      });
      res.render("workouts.ejs", {
        todos: exerciseItems,
        left: itemsLeft,
        user: req.user,
        exerciseProfile: exerciseProfileItems,
      });
    } catch (err) {
      console.log(err);
    }
  },
  deleteExerciseProfile: async (req, res) => {
    console.log(req.body.todoIdFromJSFile);
    try {
      await ExerciseProfile.findOneAndDelete({ _id: req.body.todoIdFromJSFile });
      console.log("Delete Exercise Profile");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
    unSelect: async (req,res) => {
      try {
        console.log(req.body.todoIdFromJSFile)
        await ExerciseProfile.findByIdAndUpdate({ _id: req.body.todoIdFromJSFile},
        {
          selected: false,
        })
        console.log('unSelected')
        res.json("unselected");
      } catch (error) {
        
      }
    },
  select : async(req,res) => {
    try {
      console.log(req.body.todoIdFromJSFile)
      await ExerciseProfile.findByIdAndUpdate({ _id: req.body.todoIdFromJSFile},
        {
          selected: true
        })
        console.log('unSelected')
        res.json("selected");
    } catch (error) {
      console.log(error)
    }
  }
};
