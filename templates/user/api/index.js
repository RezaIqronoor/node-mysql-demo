const express = require('express')
const router = new express.Router()
const conn = require('../../../database/mysql_config')

router.get('/api_user/', async (req, res) => {
    conn.query('SELECT * FROM user', function(error, results, fields) {
        res.send(results)
        console.log(results)
    })
})

router.get('/api_user/:id', async (req, res) => {
    const id = req.params.id
    conn.query('SELECT * FROM user WHERE id = ?', [id], function(error, results, fields) {
        res.send(results)
        console.log(results)
    })
})

router.post('/api_user/', async (req, res) => {
    console.log(req.query.user)
    const user = req.query.user

    conn.query('INSERT INTO user SET?', { user: user }, function(error, results, fields) {
        res.send(results)
    })
})

router.patch('/api_user/', async (req, res) => {
    console.log(req.query)
    const id = req.query.id
    const user = req.query.user

    // conn.query('UPDATE user SET user = ? WHERE id = ?', [user, id], function(error, results, fields) {
    //     res.send(results)
    // })
})

router.delete('/api_user/:user', async (req, res) => {
    const user = req.params.user

    conn.query('DELETE FROM user WHERE user = ?', [user], function(error, results, fields) {
        res.send(results)
    })
})

module.exports = router

