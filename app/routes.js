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



// Have you had a school experience before
router.post('/v4-Adult/time-restrict1', function (req, res) {

    let decide1 = req.session.data['decide-yn']

    console.log(req.session.data['decide-yn'])

    //Option 1
    if (decide1 === 'yes') {
        res.redirect('/v4-Adult/time-restrict-day-week')
    }
    //Option 2
    else if (decide1 === 'no') {
        res.redirect('/v4-Adult/period-type')
    }
    //end
})



// Have you had a school experience before
router.post('/multi-operator/time-restrict2', function (req, res) {

    let decide2 = req.session.data['decide-yn']

    console.log(req.session.data['decide-yn'])

    //Option 1
    if (decide2 === 'yes') {
        res.redirect('/multi-operator/time-restrict-day-week')
    }
    //Option 2
    else if (decide2 === 'no') {
        res.redirect('/multi-operator/period-type')
    }
    //end
})




// type of period ticket
router.post('/multi-operator/period-type', function (req, res) {

    let reroute = req.session.data['multi']

    console.log(req.session.data['multi'])

    //Option 1
    if (reroute === 'upload') {
        res.redirect('/multi-operator/upload')
    }
    //Option 2
    else if (reroute === 'specifiy') {
        res.redirect('/multi-operator/search-operator')
    }
    //end
})





















module.exports = router
