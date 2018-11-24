module.exports = {
    async simplify(text){
        if(!text) throw "text not provided"
        if(!(typeof text == "string")) throw "improper text type"
        return text.toLowerCase().trimLeft().trimRight().replace(/[0-9]/g,'').replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ")
    },
    async createMetrics(text){
        if(!text) throw "text not provided"
        if(!(typeof text == "string")) throw "improper text type"
        let simp = await this.simplify(text)
        
        return {
            totalLetters: simp.replace(/ /g,"").length,
            totalWords: simp.split(" ").filter((e) => e != "").length,
            uniqueWords: simp.split(" ").filter((elem, index, arr) => (elem !== "" && arr.indexOf(elem) == index)).length,
            longWords: simp.split(" ").filter((word) => word.length > 5).length,
            averageWordLength: (() => {
                ans = simp.split(" ").map((a) => a.length).reduce((a,b) => a+b,0)/simp.split(" ").length
                return (isNaN(ans) ? 0 : ans)
            })(),
            wordOccurrences: simp.split(" ").filter((e)=>e!="").reduce((seen,cur) => {
                if (cur in seen) seen[cur]++
                else seen[cur] = 1
                return seen
            },{})
        }
    }
}
