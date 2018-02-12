const bluebird = require("bluebird")
const Promise = bluebird.Promise
const fd = require('./fileData.js')
const tm = require('./textMetrics.js')

async function test(){
    await console.log("------------------- TESTING getFileAsString FUNCTION -------------------")

    await console.log("1) testing getFileAsString with empty string")
    try {console.log(await fd.getFileAsString(""))} catch (err) {console.log(err)}
    await console.log()

    await console.log("2) testing getFileAsString with no args")
    try {console.log(await fd.getFileAsString())} catch (err) {console.log(err)}
    await console.log()

    await console.log("3) testing getFileAsString with non-string path")
    try {console.log(await fd.getFileAsString(5))} catch (err) {console.log(err)}
    await console.log()

    await console.log("4) testing getFileAsString with nonexistent file")
    try {console.log(await fd.getFileAsString("txt"))} catch (err) {console.log(err)}
    await console.log()

    await console.log("5) testing getFileAsString with actual file")
    try {console.log(await fd.getFileAsString("file.txt"))} catch (err) {console.log(err)}
    await console.log()

    await console.log("------------------- TESTING getFileAsJSON FUNCTION -------------------")
    await console.log("1) testing getFileAsJSON with nonexistent file")
    try {console.log(await fd.getFileAsJSON("txt"))} catch (err) {console.log(err)}
    await console.log()

    await console.log("2) testing getFileAsJSON with no args")
    try {console.log(await fd.getFileAsJSON())} catch (err) {console.log(err)}
    await console.log()

    await console.log("3) testing getFileAsJSON with non-string path")
    try {console.log(await fd.getFileAsJSON(5))} catch (err) {console.log(err)}
    await console.log()

    await console.log("4) testing getFileAsJSON with JSON file")
    try {console.log(await fd.getFileAsJSON("package.json"))} catch (err) {console.log(err)}
    await console.log()

    await console.log("5) testing getFileAsJSON with non-JSON file")
    try {console.log(await fd.getFileAsJSON("file.txt"))} catch (err) {console.log(err)}
    await console.log()

    await console.log("------------------- TESTING saveStringToFile FUNCTION -------------------")
    await console.log("1) testing saveStringToFile with just path")
    try {console.log(await fd.saveStringToFile("txt"))} catch (err) {console.log(err)}
    await console.log()

    await console.log("2) testing saveStringToFile with no args")
    try {console.log(await fd.saveStringToFile())} catch (err) {console.log(err)}
    await console.log()

    await console.log("3) testing saveStringToFile with non-string path")
    try {console.log(await fd.saveStringToFile(5,"hella text"))} catch (err) {console.log(err)}
    await console.log()

    await console.log("4) testing saveStringToFile with non-string text")
    try {console.log(await fd.saveStringToFile("save_file_test.txt",5))} catch (err) {console.log(err)}
    await console.log()

    await console.log("5) testing saveStringToFile actually")
    try {console.log(await fd.saveStringToFile("save_file_test.txt","hella text hella text 546"))} catch (err) {console.log(err)}
    await console.log()

    await console.log("------------------- TESTING saveJSONToFile FUNCTION -------------------")
    await console.log("1) testing saveJSONToFile with just path")
    try {console.log(await fd.saveJSONToFile("txt"))} catch (err) {console.log(err)}
    await console.log()

    await console.log("2) testing saveJSONToFile with no args")
    try {console.log(await fd.saveJSONToFile())} catch (err) {console.log(err)}
    await console.log()

    await console.log("3) testing saveJSONToFile with non-string path")
    try {console.log(await fd.saveJSONToFile(5,{"object":true,"a":false}))} catch (err) {console.log(err)}
    await console.log()

    await console.log("4) testing saveJSONToFile with non-object obj")
    try {console.log(await fd.saveJSONToFile("save_file_test.json",5))} catch (err) {console.log(err)}
    await console.log()

    await console.log("5) testing saveJSONToFile actually")
    try {console.log(await fd.saveJSONToFile("save_json_test.json",{"a":1,"b":3,"c":{"d":4,"e":5}}))} catch (err) {console.log(err)}
    await console.log()

    await console.log("------------------- TESTING simplify FUNCTION ------------------------")
    await console.log("1) testing simplify with no args")
    try {console.log(await tm.simplify())} catch (err) {console.log(err)}
    await console.log()

    await console.log("2) testing simplify with non-string text")
    try {console.log(await tm.simplify(5))} catch (err) {console.log(err)}
    await console.log()

    await console.log("3) testing simplify with text with empty string")
    try {console.log(await tm.simplify(""))} catch (err) {console.log(err)}
    await console.log()

    await console.log("4) testing simplify with text with spaces")
    try {console.log(await tm.simplify("    a       B     c d E f g     h"))} catch (err) {console.log(err)}
    await console.log()

    await console.log("5) testing simplify with text with spaces and numbers and newlines and tabs")
    try {console.log(await tm.simplify("  a 54 \t\t  b \n C d e f g  9 h\n"))} catch (err) {console.log(err)}
    await console.log()

    await console.log("------------------- TESTING createMetrics FUNCTION ------------------------")
    await console.log("1) testing createMetrics with no args")
    try {console.log(await tm.createMetrics())} catch (err) {console.log(err)}
    await console.log()

    await console.log("2) testing createMetrics with non-string text")
    try {console.log(await tm.createMetrics(5))} catch (err) {console.log(err)}
    await console.log()

    await console.log("3) testing createMetrics with text with empty string")
    try {console.log(await tm.createMetrics(""))} catch (err) {console.log(err)}
    await console.log()

    await console.log("4) testing createMetrics with text with spaces")
    try {console.log(await tm.createMetrics("    a    B   c d E f g     h"))} catch (err) {console.log(err)}
    await console.log()

    await console.log("5) testing createMetrics with text with spaces and numbers and newlines and tabs and repeats")
    try {console.log(await tm.createMetrics(" a man a plan a canal panama chocolate and roses cheese cheese cheese and toast toast toast buffalo buffalo buffalo buffalo buffalo buffalo a 54 \t\t  b \n C d e f g  9 h\n"))} catch (err) {console.log(err)}
    await console.log()

    await console.log("6) testing createMetrics with just numbers")
    try {console.log(await tm.createMetrics("68    95959 020239 8484"))} catch (err) {console.log(err)}
    await console.log()
}
test()
