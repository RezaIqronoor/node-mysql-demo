const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

const root = path.join(__dirname, '../')

const userRouter = require(root + '/templates/user/router')
const userViews = path.join(root + '/templates/user/views')
const userApiRouter = require(root + '/templates/user/api')

app.set('view engine', 'hbs')
app.set('views', [userViews])
// hbs.registerPartials(partials)

app.use(express.static(path.join(__dirname, '../templates/user/')))
app.use(userRouter)
app.use(userApiRouter)

app.listen(port, async () => {
    console.log("Server is up on " + port)
})