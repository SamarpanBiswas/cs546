const express = require('express')
const router = express.Router()
const data = require('../data/users')
const bcrypt = require('bcrypt')
const path = require('path')

router.get('/', async (req, res) => {
    if (req.cookies && req.cookies.AuthCookie)
        res.redirect('/private')
    else
        res.render('static/signin', {layout: false})
})

router.get('/private', async (req, res) => {
    if (req.cookies && req.cookies.AuthCookie){
        const u = await data.findById(req.cookies.AuthCookie);
        if (u)
            res.render('layouts/main',
                {
                    username: u.username,
                    firstname: u.firstname,
                    lastname: u.lastname,
                    profession: u.profession,
                    bio: u.bio
                }
            )
        else
            res.status(404).json({messages: "User not found in db!"})
    } else {
        res.status(403).render('static/failure', {layout: false})
    }
})

router.post('/login', async (req, res) => {
    const username = req.body.username
    const u = await data.findByUsername(username)
    if (!u) {
        res.render('static/signin', {layout: false, messages : "Invalid username or password!"})
        return
    }
    const pswd = req.body.password
    const ok_pswd = await bcrypt.compare(pswd, u.hashedPassword)
    if (ok_pswd) {
        res.cookie('AuthCookie', u._id , { expires: new Date(Date.now() + 900000) })
        res.redirect('/private')
    } else {
        res.render('static/signin', {layout: false, messages : "Invalid username or password!"})
    }
})

router.get("/logout", async (req, res) => {
    res.clearCookie("AuthCookie")
    res.render('static/signin', {layout: false, messages : "You have logged out!"})
})

module.exports = router
