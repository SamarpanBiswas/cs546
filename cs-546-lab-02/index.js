const g = require('./geometry.js')
const u = require('./utilities.js')

console.log("----------------------TESTING VOLUME OF RECTANGULAR PRISM-----------------------------")
console.log("volumeOfRectangularPrism(5,5,5): ");
console.log(g.volumeOfRectangularPrism(5,5,5))
console.log("(should be 125)")
console.log("---------------------------------------------------")
try {
    console.log("volumeOfRectangularPrism(5,5,-1): ")
    console.log(g.volumeOfRectangularPrism(5,5,-1))
} catch (err) {
    console.log(err)
    console.log("(should be err)")
}
console.log("---------------------------------------------------")
try {
    console.log("volumeOfRectangularPrism(5,\"cheese\",-1): ")
    console.log(g.volumeOfRectangularPrism(5,"cheese",5))
} catch (err) {
    console.log(err)
    console.log("(should be err)")
}
console.log("---------------------------------------------------")
console.log("volumeOfRectangularPrism(15.5,4.1,9): ")
console.log(g.volumeOfRectangularPrism(15.5,4.1,9))
console.log("(should be ~571.95)")
console.log("---------------------------------------------------")
try {
    console.log("volumeOfRectangularPrism(5,5): ")
    console.log(g.volumeOfRectangularPrism(5,5))
} catch (err) {
    console.log(err)
    console.log("(should be err)")
}
console.log("---------------------------------------------------")
console.log()
console.log()




console.log("--------------------TESTING SURFACE AREA OF RECTANGULAR PRISM-------------------------------")
console.log("surfaceAreaOfRectangularPrism(5,5,5): ");
console.log(g.surfaceAreaOfRectangularPrism(5,5,5))
console.log("(should be 150)")
console.log("---------------------------------------------------")
try {
    console.log("surfaceAreaOfRectangularPrism(5,5,-1): ")
    console.log(g.surfaceAreaOfRectangularPrism(5,5,-1))
} catch (err) {
    console.log(err)
    console.log("(should be err)")
}
console.log("---------------------------------------------------")
try {
    console.log("surfaceAreaOfRectangularPrism(5,\"cheese\",-1): ")
    console.log(g.surfaceAreaOfRectangularPrism(5,"cheese",5))
} catch (err) {
    console.log(err)
    console.log("(should be err)")
}
console.log("---------------------------------------------------")
console.log("surfaceAreaOfRectangularPrism(15.5,4.1,9): ")
console.log(g.surfaceAreaOfRectangularPrism(15.5,4.1,9))
console.log("(should be ~479.9)")
console.log("---------------------------------------------------")
try {
    console.log("surfaceAreaOfRectangularPrism(5,5): ")
    console.log(g.surfaceAreaOfRectangularPrism(5,5))
} catch (err) {
    console.log(err)
    console.log("(should be err)")
}
console.log("---------------------------------------------------")
console.log()
console.log()



console.log("--------------------TESTING VOLUME OF SPHERE-------------------------------")
console.log("volumeOfSphere(5): ");
console.log(g.volumeOfSphere(5))
console.log("(should be ~523.599)")
console.log("---------------------------------------------------")
try {
    console.log("volumeOfSphere(5,5,-1): ")
    console.log(g.volumeOfSphere(5,5,-1))
} catch (err) {
    console.log(err)
    console.log("(should be err)")
}
console.log("---------------------------------------------------")
try {
    console.log("volumeOfSphere(\"cheese\"): ")
    console.log(g.volumeOfSphere("cheese"))
} catch (err) {
    console.log(err)
    console.log("(should be err)")
}
console.log("---------------------------------------------------")
console.log("volumeOfSphere(15.5): ")
console.log(g.volumeOfSphere(15.5))
console.log("(should be ~15598.5)")
console.log("---------------------------------------------------")
try {
    console.log("volumeOfSphere(): ")
    console.log(g.volumeOfSphere())
} catch (err) {
    console.log(err)
    console.log("(should be err)")
}
console.log("---------------------------------------------------")
console.log()
console.log()



console.log("----------------------TESTING SURFACE AREA OF SPHERE-----------------------------")
console.log("surfaceAreaOfSphere(5): ");
console.log(g.surfaceAreaOfSphere(5))
console.log("(should be ~314.159)")
console.log("---------------------------------------------------")
try {
    console.log("surfaceAreaOfSphere(5,5,-1): ")
    console.log(g.surfaceAreaOfSphere(5,5,-1))
} catch (err) {
    console.log(err)
    console.log("(should be err)")
}
console.log("---------------------------------------------------")
try {
    console.log("surfaceAreaOfSphere(\"cheese\"): ")
    console.log(g.surfaceAreaOfSphere("cheese"))
} catch (err) {
    console.log(err)
    console.log("(should be err)")
}
console.log("---------------------------------------------------")
console.log("surfaceAreaOfSphere(15.5): ")
console.log(g.surfaceAreaOfSphere(15.5))
console.log("(should be ~3019.07)")
console.log("---------------------------------------------------")
try {
    console.log("surfaceAreaOfSphere(): ")
    console.log(g.surfaceAreaOfSphere())
} catch (err) {
    console.log(err)
    console.log("(should be err)")
}
console.log("---------------------------------------------------")
console.log()
console.log()



console.log("------------------------TESTING DEEP EQUALITY---------------------------")
let m = {
    "a":5,
    "b":{
        "c":10,
        "d":15,
        "e":{
            "f": true,
            "g": "cheese"
            }
        },
    "h":{
        "i":false,
        "j":null,
        "k":{
            "l":50
            }
        },
    "m":1
}
let n = {
    "a":5,
    "b":{
        "c":10,
        "d":15,
        "e":{
            "f": true,
            "g": "cheese"
            }
        },
    "m":1,
    "h":{
        "i":false,
        "j":null,
        "k":{
            "l":50
            }
        }
}
let d = {
    "a":5,
    "b":{
        "c":10,
        "d":15,
        "e":{
            "f": false,
            "g": "cheese"
            }
        },
    "h":{
        "i":true,
        "j":null,
        "k":{
            "l":50
            }
        },
    "m":1
}
console.log("m,n: ")
console.log(m)
console.log("d: ")
console.log(d)
console.log("---------------------------------------------------")
try{
    console.log("deepEquality():")
    console.log(u.deepEquality())
} catch (err) {
    console.log(err)
    console.log("(should be err)")
}
console.log("---------------------------------------------------")
console.log("deepEquality(m,n):")
console.log(u.deepEquality(m,n))
console.log("(should be true)")
console.log("---------------------------------------------------")
console.log("deepEquality(m,d)")
console.log(u.deepEquality(m,d))
console.log("(should be false)")
console.log("---------------------------------------------------")
console.log("deepEquality(m,m)")
console.log(u.deepEquality(m,m))
console.log("(should be true)")
console.log("---------------------------------------------------")
console.log("deepEquality(m,\"cheese\")")
console.log(u.deepEquality(m,"cheese"))
console.log("(should be false)")
console.log("---------------------------------------------------")

console.log()
console.log()
console.log("------------------------TESTING UNIQUE ELEMENTS---------------------------")
let v = ["a","a","b","a","b","c"]
let w = [1,2,3,"cheese",2,3,"cheese",1,"cheese",true]
console.log("v: ", v)
console.log("w: ", w)
console.log("---------------------------------------------------")
try {
    console.log("uniqueElements()")
    console.log(u.uniqueElements())
} catch(err) {
    console.log(err)
    console.log("(should be err)")
}
console.log("---------------------------------------------------")
console.log("uniqueElements(v)")
console.log(u.uniqueElements(v))
console.log("(should be 3)")
console.log("---------------------------------------------------")
console.log("uniqueElements([])")
console.log(u.uniqueElements([]))
console.log("(should be 0)")
console.log("---------------------------------------------------")
console.log("uniqueElements(w)")
console.log(u.uniqueElements(w))
console.log("(should be 5)")
console.log("---------------------------------------------------")
try {
    console.log("uniqueElements(1,2,3)")
    console.log(u.uniqueElements(1,2,3))
} catch(err) {
    console.log(err)
    console.log("(should be err)")
}
console.log("---------------------------------------------------")
console.log()
console.log()

console.log("------------------------TESTING COUNT OF EACH CHARACTER IN STRING---------------------------")
console.log("countOfEachCharacterInString(\"Hello, the pie is in the oven\")")
console.log(u.countOfEachCharacterInString("Hello, the pie is in the oven"))
console.log("should be: ")
console.log(`
{ " ": 6,
  ",": 1,
  "H": 1,
  "e": 5,
  "h": 2,
  "i": 3,
  "l": 2,
  "n": 2,
  "o": 2,
  "p": 1,
  "s": 1,
  "t": 2,
  "v": 1 }
`)
console.log("testing using deepEquality: ",
    u.deepEquality(
        u.countOfEachCharacterInString("Hello, the pie is in the oven"),
        { " ": 6, ",": 1, "H": 1, "e": 5, "h": 2, "i": 3, "l": 2, "n": 2, "o": 2, "p": 1, "s": 1, "t": 2, "v": 1 }
    )
)
console.log("---------------------------------------------------")
try{
    console.log("countOfEachCharacterInString()")
    console.log(u.countOfEachCharacterInString())
} catch(err){
    console.log(err)
    console.log("(should be err)")
}
console.log("---------------------------------------------------")
try{
    console.log("countOfEachCharacterInString(true)")
    console.log(u.countOfEachCharacterInString(true))
} catch(err){
    console.log(err)
    console.log("(should be err)")
}
console.log("---------------------------------------------------")
console.log("countOfEachCharacterInString(\"\")")
console.log(u.countOfEachCharacterInString(""))
console.log("(should be {})")
console.log("---------------------------------------------------")
console.log("countOfEachCharacterInString(\"aaaaaaaaaaaaa\")")
console.log(u.countOfEachCharacterInString("aaaaaaaaaaaaa"))
console.log("(should be {\"a\":13})")
console.log("---------------------------------------------------")
