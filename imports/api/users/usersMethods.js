import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

var createUserCallback = function() {
  Accounts.loginWithPassword('admin', 'password');
}

Meteor.methods({
  createUser(user) {
    try {
      
      Accounts.createUser({ 
        username: user.username, 
        password: user.password }, createUserCallback);

      return;
    }
    catch (exception) {
      throw new Meteor.Error('500', exception.message);
    }
  }
});