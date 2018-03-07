const mongoCollections = require("../config/mongoCollections")
const recipes = mongoCollections.recipes
const u = require("node-uuid")

async getAllRecipes() {
    return (await recipes()).find({}).toArray()
}

async getRecipe(id){
    if (!id || typeof(id) !== 'string') throw "Invalid value passed for id"
    const r = await (await recipes()).findOne({_id: id})
    return (!r) ? throw "Recipe not found" : r
}

async postRecipe(title, ingredients, steps){
    if (!title || typeof(title) !== 'string')
      throw `Title ${title} is not valid`

    if (!ingredients || !Array.isArray(ingredients)) throw "Invalid ingredients list format"

    for (const ingredient of updatedRecipe.ingredients)
      if (!ingredient.name || !ingredient.amount)
        throw "Each ingredient must have a name and an amount"

    if (!steps || !Array.isArray(steps)) throw "Invalid steps.";

    let newRecipe = {
        _id = u.v4(),
        title: title,
        ingredients: ingredients,
        steps:steps
    }

    const rcol = await recipes()
    return await getRecipe(await rcol.insertOne(newRecipe)).insertedId)
}

async putRecipe(id, updatedRecipe) {
    if (!id) throw `ID ${id} is not valid`
    if (!updatedRecipe) throw "Updated recipe cannot be null"
    if (!updatedRecipe.title || typeof(updatedRecipe.title) !== 'string')
        throw `Title ${updatedRecipe.title} is invalid`
    if (!updatedRecipe.ingredients ||
        !Array.isArray(updatedRecipe.ingredients)) throw `Invalid ingredients list format`

    for (const ingredient of updatedRecipe.ingredients)
      if (!ingredient.name || !ingredient.amount)
        throw "Each ingredient must have a name and an amount"

    if (!updatedRecipe.steps || !Array.isArray(updatedRecipe.steps)) throw "Invalid steps";

    const current_recipe = await getRecipe(id)

    await (await recipes()).updateOne({_id: id} , {$set : updatedRecipe})

    return await getRecipe(id)
}
