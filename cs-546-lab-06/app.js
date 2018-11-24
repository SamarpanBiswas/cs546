const express = require("express")
const app = express()
const configRoutes = require("./routes/index")

configRoutes(app)

app.listen(3000, () => {
    console.log("server started")
    console.log("routes on http://localhost:3000")
})


