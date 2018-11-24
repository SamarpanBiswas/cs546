const questionOne = function questionOne(arr){
    return arr.reduce((acc, cur)=>acc+cur*cur,0);
}
const questionTwo = function questionTwo(index){
    if (index < 0) return 0;
    if (index == 1 || index == 0) return index;
    return questionTwo(index-1) + questionTwo(index-2);
}
const questionThree = function questionThree(str){
    let out = 0;
    let vow = ['a','e','i','o','u','A','E','I','O','U'];
    for (let i of str){
        out += vow.includes(i)?1:0;
    }
    return out;
}
const questionFour = function questionFour(num){
    if (num < 0) return NaN;
    return Array.apply(null, Array(num)).map((_, i)=>i+1).reduce((acc,cur)=>acc*cur,1);
}

module.exports = {
    firstName: "KHAYYAM",
    lastName: "SALEEM",
    studentId: "10408112",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
}
