const bluebird = require("bluebird")
const Promise = bluebird.Promise
const fs = bluebird.promisifyAll(require("fs"))

module.exports = {
    async getFileAsString(path){
        if (!path) throw 'file path not provided'
        if (!(typeof path == 'string')) throw 'improper path type, must be string'
        try {await fs.readFileAsync(path, "utf-8")} catch (err) {throw `file ${path} not found`}
        return fs.readFileAsync(path, "utf-8")
    },

    async getFileAsJSON(path){
        if (!path) throw 'file path not provided'
        if (!(typeof path == 'string')) throw 'improper path type, must be string'
        try {await fs.readFileAsync(path, "utf-8")} catch (err) {throw `file ${path} not found`}
        const fileContent = await fs.readFileAsync(path)
        try {JSON.parse(fileContent)} catch (err) {throw "file not in JSON format"}
        return JSON.parse(fileContent)
    },

    async saveStringToFile(path, text){
        if (!path) throw 'file path not provided'
        if (!text) throw 'text empty or not provided'
        if (!(typeof path == 'string')) throw 'improper path type, must be string'
        if (!(typeof text == 'string')) throw 'improper text type, must be string'
        fs.writeFileAsync(path,text,"utf-8",(err) => {if(err) throw err})
        return true;
    },

    async saveJSONToFile(path, obj){
        if (!path) throw 'file path not provided'
        if (!obj) throw 'text empty or not provided'
        if (!(typeof path == 'string')) throw 'improper path type, must be string'
        if (!(typeof obj == 'object')) throw 'improper obj type, must be object'
        try {JSON.stringify(obj)} catch (err) {throw 'obj not representable as JSON'}
        fs.writeFileAsync(path,JSON.stringify(obj),"utf-8",(err) => {if(err) throw err})
        return true;
    }

}
