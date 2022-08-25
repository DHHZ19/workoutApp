const express = require("express");
const router = express.Router();
const todosController = require("../controllers/exercise");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, todosController.getExercise);

router.get("/workouts", todosController.getWorkouts);

router.post("/createTodo", todosController.createExercise);

router.put("/markComplete", todosController.markComplete);

router.put("/markIncomplete", todosController.markIncomplete);

router.put('/unSelect', todosController.unSelect)

router.put('/select', todosController.select)

router.delete("/deleteTodo", todosController.deleteExercise);

router.delete('/deleteExerciseProfile', todosController.deleteExerciseProfile)

router.post("/ceateExerciseProfile", todosController.createExerciseProfile);

module.exports = router;
