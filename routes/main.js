const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    const data = {
        title: "Kickback-Coffee Bar and Lounge"
    }

    res.render('home', data)

})

module.exports = router