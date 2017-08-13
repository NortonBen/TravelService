'use strict'

/*
|--------------------------------------------------------------------------
| Redis Configuaration
|--------------------------------------------------------------------------
|
| Here we define the configuration for redis server. A single application
| can make use of multiple redis connections using the redis provider.
|
*/

const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | connection
  |--------------------------------------------------------------------------
  |
  | Redis connection to be used by default.
  |
  */
  connection: Env.get('REDIS_CONNECTION', 'local'),

  /*
  |--------------------------------------------------------------------------
  | local connection config
  |--------------------------------------------------------------------------
  |
  | Configuration for a named connection.
  |
  */
  local: {
    host: Env.get('REDIS_HOST', 'localhost'),
    port: Env.get('REDIS_PORT', 6379),
    password:  Env.get('REDIS_Pass', null),
    db: Env.get('REDIS_DB', 0),
    keyPrefix: Env.get('REDIS_Prefix', '')
  },

  /*
  |--------------------------------------------------------------------------
  | cluster config
  |--------------------------------------------------------------------------
  |
  | Below is the configuration for the redis cluster.
  |
  */
  cluster: {
    clusters: [{
      host:  Env.get('REDIS_HOST', 'localhost'),
      port:  Env.get('REDIS_PORT', 6379),
      password: Env.get('REDIS_Pass', null),
      db: Env.get('REDIS_DB', null),
    },
    {
      host:  Env.get('REDIS_HOST', 'localhost'),
      port:  Env.get('REDIS_PORT', 6380),
      password: Env.get('REDIS_Pass', null),
      db: Env.get('REDIS_DB', 0),
    }]
  }
}