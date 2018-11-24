const express = require("express")
const app = express()
const configRoutes = require("./routes")
const bp = require("body-parser")


app.use(bp.json())

configRoutes(app)

app.listen(3000, () => {
    console.log("Server running...")
    console.log("routes on http://localhost:3000")
})
