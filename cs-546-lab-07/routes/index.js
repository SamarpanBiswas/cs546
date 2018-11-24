const recipeRoutes = require("./recipes");


module.exports = app => {
  app.use("/recipes", recipeRoutes)

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" })
  })
}
