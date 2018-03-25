const express = require('express')
const router = express.Router()
const checker = require("../palindrome")

router.post('/', async (req, res) => {
    const result = req.body

    const check = result['text-to-test']
    if(!check){
        res.status(400)
        res.render('error', {error: "No text passed! Try passing a string in."})
    } else {
        res.render("layouts/main", {check: check, is_pal: await checker.is_pal(check)})
    }
})

module.exports = router
