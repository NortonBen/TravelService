'use strict'

class MongoSerializer {

  * findById (id, options) {
    const Model = use(options.model);
    const user = yield Model.findOne({_id: id});
    if(user){
      return user;
    }
  }

  * findByCredentials (key, options) {
    const Model = use(options.model);
    let query = {};
    query[options.uid] = key;
    const user = yield Model.findOne(query);
    if(user){
      return user;
    }
    return null;
  }

  * findByToken (token, options) {
    // ...
  }

  * getUserForToken (tokenPayload, options) {
    console.log(tokenPayload, options)
  }

  * saveToken (userPayload, token, options, expiry) {
    console.log('save Token',userPayload, token, options)
  }

  * revokeTokens (userPayload, tokens, reverse) {
    // ...
  }

  * validateToken (tokenPayload, options) {
    // ...
  }

  * validateCredentials (userPayload, password, options) {
    if (userPayload.password === password) {
      return true;
    }
    return false;
  }

  primaryKey(authenticatorOptions) {
    return  '_id'   
  }

}

module.exports = MongoSerializer