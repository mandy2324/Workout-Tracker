const router = require("express").Router();
const Workout = require("../models/workout.js");
const { route } = require("./htmlRoutes.js");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then((workout) => {
            res.json(workout)
        })
        .catch((err) => {
            res.json(err)
        })
});
router.get("/api/workouts", (req, res) => {
    Workout.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum: '$exercise.duration'
                },
            },
        }, ])
        .then((workout) => {
            console.log('YOO', workout);
            res.json(workout)
        })
        .catch((e) => {
            res.json(e)
        })
});






module.exports = router;