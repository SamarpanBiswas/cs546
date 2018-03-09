const express = require("express")
const router = express.Router()
const data = require("../data")
const recipeData = data.recipes


//handler for GET /recipes
//fetches all
router.get("/", async (req,res) => {
    try {
        const list = await recipeData.getAllRecipes()
        res.status(200).end()
    } catch (e) {
        res.status(500).send()
    }
})

//handler for /recipes/:id
//returns specified recipe by id
router.get("/:id", async (req, res) => {
    try {
        const r = await recipeData.getRecipe(req.params.id)
        res.status(200).end()
    } catch (e) {
        res.status(404).json({message: "recipe not found"})
    }
})

//handler for POST /recipes
//creates new recipe with data in request body
router.post("/:id", async (req, res) => {
    try {
        const r = req.body
        const newR = await recipeData.postRecipe(r.title, r.ingredients, r.steps)
        res.status(200).end()
    } catch (e) {
        res.status(500).json({err: e})
    }
})

//handler for PUT /recipes/:id
//replaces recipe with new content entirely
router.put("/:id", async (req,res) => {
    try {
        const updated = await recipeData.putRecipe(req.params.id, req.body)
        res.status(200).end()
    } catch (e) {
        res.status(500).json({err: e})
    }
})

//handler for patch
//updates the recipe with changes offered
//returns updated recipe
router.patch("/:id", async (req, res) => {
    try {
        const updated = await recipeData.patchRecipe(rec.params.id, req.body)
        res.status(200).end()
    } catch (e) {
        res.status(500).json({err: e})
    }
})

//handler for delete
//deletes recipe
router.delete("/:id", async (req, res) => {
    try {
        await recipeData.deleteRecipe(req.params.id)
        res.status(200).end()
    } catch (e) {
        res.status(500).json({err: e})
    }
})


module.exports = router


