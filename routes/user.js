// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const User = require('../models/User')

router.get('/', (req, res) => {
    User.find()
    .then(user => {
        res.json({
            confirmation: 'success',
            data: user
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

router.post('/', (req, res) => {
    User.create(req.body)
    .then(user => {
        res.json({
            confirmation: 'success',
            data: user
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const data = req.body

    User.findByIdAndUpdate(id, data, {new: true})
    .then(user => {
        res.json({
            confirmation: 'success',
            data: user
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id

    User.findByIdAndRemove(id)
    .then(() => {
        res.json({
            confirmation: 'success',
            message: 'delete data successfully'
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

module.exports = router