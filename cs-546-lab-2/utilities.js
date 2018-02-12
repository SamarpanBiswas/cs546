function deepEquality(obj1, obj2){
    if(arguments.length !== 2) throw `incorrect number of args`
    if(obj1 === obj2)
        return true
    if ((typeof obj1 !== 'object' || typeof obj2 !== 'object'))
        return false
    for(let x of Object.keys(obj1))
        if(!(obj2.hasOwnProperty(x)) ||!deepEquality(obj1[x], obj2[x])) return false
    return true
}

function uniqueElements(arr){
    if(arguments.length !== 1) throw `incorrect number of args`
    if (!Array.isArray(arr)) throw `${arr || "provided argument"} is not an array or does not exist.`
    if(arr == []) return 0
    let check = {}
    for (let x of arr)
        if(!check.hasOwnProperty(x))
            check[x] = 1
    return Object.keys(check).length
}

function countOfEachCharacterInString(str){
    if(arguments.length !== 1) throw `incorrect number of args`
    if (!(typeof str == 'string')) throw `${str || "provided argument"} is not a string or does not exist.`
    check = {}
    for (let c of str)
        if(check.hasOwnProperty(c))
            check[c] += 1
        else check[c] = 1
    return check
}

module.exports = {
    deepEquality,
    uniqueElements,
    countOfEachCharacterInString
}
