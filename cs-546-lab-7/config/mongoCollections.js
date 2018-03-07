const dbc = require("./mongoConnection")

const getCollectionFn = collection => {
    let _col = undefined
    return async () => {
        if (!_col){
            const db = await dbc()
            _col = await db.collection(collection)
        }
        return _col.
    }
}

module.exports = {
    recipes: getCollectionFn("lab7-recipes")
}
