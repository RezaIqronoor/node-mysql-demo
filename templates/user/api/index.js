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
    conn.query('SELECT * FROM user WHERE user = ?', [id], function(error, results, fields) {
        res.send(results)
        console.log(results)
    })
})

router.post('/api_user/', (req, res) => {
    const data = req.body

    conn.query('INSERT INTO user SET?', { user: data.user }, function(error, results, fields) {
        res.send(results)
    })
})

router.patch('/api_user/', async (req, res) => {
    const id = req.body.id
    const user = req.body.user

    conn.query('UPDATE user SET user = ? WHERE id = ?', [user, id], function(error, results, fields) {
        res.send(results)
    })
})

router.delete('/api_user/:user', async (req, res) => {
    const user = req.params.user

    conn.query('DELETE FROM user WHERE user = ?', [user], function(error, results, fields) {
        res.send(results)
    })
})

module.exports = router

