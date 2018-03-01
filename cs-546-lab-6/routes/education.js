const express = require("express")
const router = express.Router()

const education = [
    {
        "schoolName": "Mawbey Street School",
        "degree": "elementary school certificate",
        "favoriteClass": "4th grade science with Mrs. Coyle",
        "favoriteMemory": "Molding Play-Doh with the guidance counselor while we talked about my difficulties in making friends."
    },
    {
        "schoolName": "The Middlesex County Academy for Science, Math, and Engineering Technologies",
        "degree": "high school diploma",
        "favoriteClass": "Discrete Mathematics",
        "favoriteMemory": "Becoming Junior Varsity soccer captain"
    },
    {
        "schoolName": "Stevens Institute of Technology",
        "degree": "to receive BS in Computer Science and MS in Applied Mathematics",
        "favoriteClass": "CS511 -- Concurrent Programming",
        "favoriteMemory": "Meeting my best friend and roommate, Ben Iofel"
    }
]

router.get("/", (req,res) => {
    try {
        res.json(education)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
