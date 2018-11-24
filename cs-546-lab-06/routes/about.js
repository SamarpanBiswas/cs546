const express = require("express")
const router = express.Router()

const aboutData = {
    "name":"Khayyam Saleem",
    "cwid":"10408112",
    "biography": "My name is Khayyam Saleem. I was born in Saudi Arabia, but since then I have lived in 4 other different countries (United Arab Emirates, Pakistan, Japan, United States). I grew up without much traditional wealth, but lots of love from my family and enough resources to grow up well-fed, well-mannered, and well-trained. I played soccer in a past life, but have since foregone such frivolties in favor of pursuing excellence in the field of computer science. I currently attend Stevens Institute of Technology, where I am enrolled in the undergraduate Computer Science program and the graduate Applied Mathematics program. I hope to one day combine these skills to solve complex computational problems.\nI currently work as a Teaching Assistant for CS496, an undergraduate Programming Languages course at Stevens. I'm also a tutor at Stevens, through the Academic Support Center. I am also employed at Codecademy, an online platform for computer science and programming education. All of my jobs involve teaching, and it is one of my fondest passions.",
    "favoriteShows": ['Trailer Park Boys', 'The Office', 'The Good Place', 'House'],
    "hobbies": ["biking", "reading", "hiking", "soccer"]
}

router.get("/", (req,res) => {
    try {
        res.json(aboutData);
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
