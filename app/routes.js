const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Profile 3 directions


// Have you had a school experience before
router.post('/v4r1/time-restrict', function (req, res) {

    let decide = req.session.data['decide-yn']

    console.log(req.session.data['decide-yn'])

    //Option 1
    if (decide === 'yes') {
        res.redirect('/v4r1/time-restrict-day-week')
    }
    //Option 2
    else if (decide === 'no') {
        res.redirect('/v4r1/period-type')
    }
    //end
})
































module.exports = router
