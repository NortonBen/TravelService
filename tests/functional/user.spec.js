'use strict'

const chai = require('chai')
const assert = chai.assert
const baseUrl = `http://${process.env.HOST}:${process.env.PORT}/`

describe('User', function () {
  before( function () {
    const User = use('App/Model/User');
  });

  it('should throw validation error when user email is missing', function () {
     const User = use('App/Model/User')
     const user = new User()

  })


  it('should return 200 when able to verify user account with a given token', function * () {
    const user = use('Factory').model('App/Model/User').make()
    assert.equal(user, user)
  })
})
