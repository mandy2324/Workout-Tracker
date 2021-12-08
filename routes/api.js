const router = require("express").Router();
router.get("/", (req, res) => {
    console.log("hello");
    res.json("world");
})

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});







module.exports = router;