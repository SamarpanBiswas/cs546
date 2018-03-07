const mcli = require('mongodb').MongoClient
const config = require("./settings").mongoConfig

let dbUrl = `${config.serverUrl}`
let _conn = undefined
let _db = undefined

module.exports = async () => {
    if (!_conn){
        _conn = await mli.connect(dbUrl)
        _db = await _conn.db(config.database)
    }
    return _db
}
