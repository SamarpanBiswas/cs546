const router = require('express').Router()
const result = require('./result')
const path = require("path")

const constructorMethod = app => {
    app.use('/result', result)
    app.get('/', (req, res) => {
        res.sendFile(path.resolve("static/index.html"))
    })
    app.get('*', (req, res) => {
        res.status(404).send()
    })
}

module.exports = constructorMethod
