const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Profile 3 directions

// Have you had a school experience before
router.post('/v4r1/time-restrict', function (req, res) {
  const decide = req.session.data['decide-yn']

  console.log(req.session.data['decide-yn'])

  if (decide === 'yes') {
    res.redirect('/v4r1/time-restrict-day-week')
  } else if (decide === 'no') {
    res.redirect('/v4r1/period-type')
  }
})

// Have you had a school experience before
router.post('/v4-Adult/time-restrict1', function (req, res) {
  const decide1 = req.session.data['decide-yn']

  console.log(req.session.data['decide-yn'])

  if (decide1 === 'yes') {
    res.redirect('/v4-Adult/time-restrict-day-week')
  } else if (decide1 === 'no') {
    res.redirect('/v4-Adult/period-type')
  }
})

// Have you had a school experience before
router.post('/multi-operator/time-restrict2', function (req, res) {
  const decide2 = req.session.data['decide-yn']

  console.log(req.session.data['decide-yn'])

  if (decide2 === 'yes') {
    res.redirect('/multi-operator/time-restrict-day-week')
  } else if (decide2 === 'no') {
    res.redirect('/multi-operator/period-type')
  }
})

// type of period ticket
router.post('/multi-operator/period-type', function (req, res) {
  const reroute = req.session.data.multi

  console.log(req.session.data.multi)

  if (reroute === 'upload') {
    res.redirect('/multi-operator/upload')
  } else if (reroute === 'specifiy') {
    res.redirect('/multi-operator/choose-services-own')
  }
})

// Six outcomes here - answers from 3 questions

// 1 - Yes, No, No = (Fares Triangle Intro)
// 2 - Yes, Yes, No = (Fares Triangle Intro + Fares Triangle Temple)
// 3 - Yes, Yes, Yes = (Fares Triangle Intro + Fares Triangle Temple + Fares Triangle Help Files)

// 5 - No, Yes, Yes = (Fares Triangle Temple + Fares Triangle Help Files)
// 6 - No, No, Yes = (Triangle Help Files)
// 4 - No, No, No = upload

router.post('/upload/pre-upload', function (req, res) {
  const reroute = req.session.data.multi

  console.log(req.session.data.multi)

  if (reroute === 'upload') {
    res.redirect('/multi-operator/upload')
  } else if (reroute === 'specifiy') {
    res.redirect('/multi-operator/choose-services-own')
  }
})

module.exports = router
