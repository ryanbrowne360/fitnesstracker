const db = require('../models')

module.exports = function (app) {


    app.get('/api/workouts', async function (req, res) {
        const result = await db.Workout.find({})
        res.send(result)
    })

    app.post('/api/workouts', async function (req, res) {
        const createWorkout = await db.Workout.create({})
        res.send(createWorkout)
    })
    app.put('/api/workouts/:id', async function (req, res) {
        const result = await db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true })

        res.send(result)
    })
    app.get('/api/workouts/range', async function (req, res) {
        const result = await db.Workout.find({})
        res.send(result)
    })
}