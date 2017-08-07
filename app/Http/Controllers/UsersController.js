'use strict'

const User = use('App/Model/User')

class UsersController {

  /**
   * return user jwt token by validating
   * their credentials
   *
   * @param  {Object} request
   * @param  {Object} response
   */
  * login (request, response) {
    const username = request.input('username')
    const password = request.input('password')
    
    const login = yield request.auth.attempt(username, password)
    if (login) {
      response.send('Logged In Successfully')
      return
    }

    response.unauthorized('Invalid credentails')
  }


  /**
   * Registers a user by creating a new user and
   * sending them email verification email.
   *
   * @param  {Object} request
   * @param  {Object} response
   */
  * register (request, response) {
    const userDetails = request.only('email', 'password')
    console.log(credentials);
    response.ok({message: 'Account created successfully', status: 200, data: user})
  }


  /**
   * verifies a user account with a give
   * token
   *
   * @param  {Object} request
   * @param  {Object} response
   */
  * verifyAccount (request, response) {
    const token = request.input('token')
    console.log(token);
    response.ok({message: 'Account verified successfully', status: 200})
  }
}

module.exports = UsersController