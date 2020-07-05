const express = require('express')
const idx = require('idx')

const router = express.Router()

const userModel = require('./models')

/**
 * Retrieve main info about a specific user
 */
router.get('/user/:id', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = userModel.getUserById(Number(userId))

    if (!userData) {
        res.statusCode = 404
        return res.json('can not get user')
    }

    return res.json({data: userData})
})

module.exports = router
