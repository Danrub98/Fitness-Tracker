const router = require("express").Router();
const Workout = require("../models/workout.js");

// router.get("/exercise", (req, res) => {
//   Transaction.find({})
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.get("/api/workouts", (req, res) =>{
  console.log("get function")
  Workout.aggregate([
    {
    $addFields: {
      totalDuration: {
        $sum: "$exercises.duration",
      }
    }
  } 
   ])
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id, 
    {
      $push: { exercises: body}
    },
    {
      new: true,
      runValidators: true 
    }
  )
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.get("/api/workouts", (req, res) => {
//   Transaction.find({})
//     .sort({ date: -1 })
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

//Úlitmos 7 ejercicios. Buscar "limit()", "sore()"  

module.exports = router;