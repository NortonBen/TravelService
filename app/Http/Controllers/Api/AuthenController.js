'use strict'

const User = use('App/Model/User')

class AuthenController {
    /**
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

    * register (request, response) {

    }

    * token (request, response) {

    }
}

module.exports = AuthenController
