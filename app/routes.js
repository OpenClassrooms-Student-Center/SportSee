const express = require('express')
const idx = require('idx')

const router = express.Router()

const {
    getUserById,
    getUserLastSession
} = require('./models')

/**
 * Retrieve main info about a user
 */
router.get('/user/:id', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserById(Number(userId))

    if (!userData) {
        res.statusCode = 404
        return res.json('can not get user')
    }

    return res.json({data: userData})
})


/**
 * Retrieve last session for a user
 */
router.get('/user/:id/sessions', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserLastSession(Number(userId))

    if (!userData) {
        res.statusCode = 404
        return res.json('can not get user')
    }

    return res.json({data: userData})
})

module.exports = router
