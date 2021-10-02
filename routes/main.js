const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    const data = {
        title: "Kickback-Coffee Bar and Lounge",
        description: "Welcome to the Kickback-Coffee Bar and Lounge! We aim to create exquisite coffee and lounge style drinks "
    }

    res.render('home', data)

})

module.exports = router