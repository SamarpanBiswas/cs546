const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const configRoutes = require('./routes')
const app = express()
const port = process.env.PORT || 3000

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use("/public", express.static(__dirname + "/public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

configRoutes(app)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
    console.log(`Routes running on http://localhost:${port}`)
})
