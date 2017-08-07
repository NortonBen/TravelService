'use strict'

/*
|--------------------------------------------------------------------------
| Before Tests
|--------------------------------------------------------------------------
|
| This file will be executed before running all the tests
|
*/

const bootstrap = require('../bootstrap/test')
process.env.ENV_PATH = '.env.test'

let fireServer = true

console.info('-------------- boostrap adonis --------------')
bootstrap(function * (Server) {
  if (fireServer) {
      Server.listen(process.env.HOST, process.env.PORT)
  }
  if (fireServer) {
      Server.getInstance().close()
  }
})

const Ioc = use('adonis-fold').Ioc

/**
 * override the hash provider for faster tests, since
 * bcrypt is a slow algo.
 */
Ioc.bind('Adonis/Src/Hash', function () {
  return {
    verify: function * (value, oldValue) {
      return value === oldValue
    },
    make: function * (value) {
      return value
    }
  }
})
