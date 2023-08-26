//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/one', function(request, response) {
  // all values submitted using HTML forms are considered strings, we need to
  // convert them to numbers before we can do maths with them. If we don't do
  // this the strings will be 'added' (concatenated) so 1 + 5 = 15
  request.session.data['first-number'] = Number(request.session.data['first-number'])

  console.log(request.session.data)

  response.redirect('/two')
})

router.post('/two', function(request, response) {
  request.session.data['second-number'] = Number(request.session.data['second-number'])

  console.log(request.session.data)

  response.redirect('/total')
})

router.post('/start-again', function(request, response) {
  request.session.data['first-number'] = null
  request.session.data['second-number'] = null

  console.log(request.session.data)

  response.redirect('/')
})
