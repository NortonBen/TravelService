'use strict'

const User = use('App/Model/User')

const usersData = require('./data/users');

const Factory = use('Factory')

class UserSeeder {

  * run () {
    yield Promise.all(yield usersData.map( function* (item) {
      //const user = new User(item);
      //yield user.save();
      console.log(item);
    }));
  }

}

module.exports = UserSeeder
