const bluebird = require("bluebird")
const Promise = bluebird.Promise
const fd = require('./fileData.js')
const tm = require('./textMetrics.js')

async function main(){
    for(let fname of ["chapter1", "chapter2", "chapter3"]){
        try {
            console.log(await fd.getFileAsString(fname+".result.json"))
        } catch (_) {
            let fileContent = await fd.getFileAsString(fname+".txt")
            let writeSimpSuccess = await fd.saveStringToFile(fname+".debug.txt",
                await tm.simplify(fileContent))
            let metrics = await tm.createMetrics(fileContent)
            let writeMetricSuccess = await fd.saveJSONToFile(fname+".result.json", metrics)
            await console.log(metrics)
        }
    }
}
main()
