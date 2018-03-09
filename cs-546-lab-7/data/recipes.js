const mongoCollections = require("../config/mongoCollections")
const recipes = mongoCollections.recipes
const u = require("node-uuid")

async function getAllRecipes() {
    console.log("here")
    const r = await recipes()
    console.log(r)
    return await r.find({}).toArray()
}

async function getRecipe(id){
    if (!id || typeof(id) !== 'string') throw "Invalid value passed for id"
    const r = await (await recipes()).findOne({_id: id})
    if (!r) throw "Recipe not found"
    return r
}

async function postRecipe(title, ingredients, steps){
    if (!title || typeof(title) !== 'string')
      throw `Title ${title} is not valid`

    if (!ingredients || !Array.isArray(ingredients)) throw "Invalid ingredients list format"

    for (const ingredient of updatedRecipe.ingredients)
      if (!ingredient.name || !ingredient.amount)
        throw "Each ingredient must have a name and an amount"

    if (!steps || !Array.isArray(steps)) throw "Invalid steps.";

    let newRecipe = {
        _id : u.v4(),
        title: title,
        ingredients: ingredients,
        steps:steps
    }

    const rcol = await recipes()
    return await getRecipe(await rcol.insertOne(newRecipe)).insertedId
}

async function putRecipe(id, updatedRecipe) {
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

async function patchRecipe(id, updated){
    if (!id) throw "Invalid id"
    if (!updated) throw "update cannot be null"
    let updated_info = {}
    if (updated.title && !(typeof updated.title == 'string')) throw "title must be of type string"
    if (updated.title) updated_info.title = updated.title
    if (updated.ingredients && !Array.isArray(updated.ingredients)) throw "must pass array of ingredients"
    if (updated.ingredients){
        for (const ingredient of updated.ingredients)
            if(!ingredient.name || !ingredient.amount)
                throw "ingredients must consist of a name and an amount"
        updated_info.ingredients = updated.ingredients
    }
    if (updated.steps){
        if (!Array.isArray(updated.steps))
            throw "Invalid steps passed"
        updated_info.steps = updated.steps
    }

    await (await recipes()).updateOne({_id: id}, {$set : updated_info})

    return getRecipe(id)
}

async function deleteRecipe(id){
    if ((await (await recipes()).removeOne({_id: id})).deletedCount === 0)
        throw `Could not delete recipe ${id}`
}

module.exports = {
    getAllRecipes,
    getRecipe,
    postRecipe,
    putRecipe,
    patchRecipe,
    deleteRecipe
}
