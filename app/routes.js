const express = require('express')
const idx = require('idx')

const router = express.Router()

const {
    getUserById,
    getUserActivityById,
    getUserAverageSession
} = require('./models')

const {
    handleNoUserData
} = require('./middleware')

/**
 * Retrieve main info about a user
 */
router.get('/user/:id', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserById(Number(userId))

    return handleNoUserData(res, userData)
})


router.get('/user/:id/activity', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserActivityById(Number(userId))

    return handleNoUserData(res, userData)
})

router.get('/user/:id/average-sessions', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserAverageSession(Number(userId))

    return handleNoUserData(res, userData)
})

router.get('/user/:id/today-score', (req, res) => {
    console.log("====")
    console.log('today-score')
    console.log("====")

    return res.json({res: 'ok'})
})

router.get('/user/:id/activities', (req, res) => {
    console.log("====")
    console.log('activities')
    console.log("====")

    return res.json({res: 'ok'})
})

router.get('/user/:id/key-data', (req, res) => {
    console.log("====")
    console.log('key-data')
    console.log("====")

    return res.json({res: 'ok'})
})

module.exports = router
