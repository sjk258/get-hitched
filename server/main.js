import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

Meteor.startup(() => {
  // code to run on server at startup
  if (Meteor.isServer) {
    
    if (!Accounts.findUserByUsername('admin')) {
      console.log("No admin found. Will create default.");
      Accounts.createUser({
        username: 'admin',
        password: 'password'
      })
    }
    else {
      console.log("Admin found. Continuing...");
    }

    let userId = Accounts.findUserByUsername('admin');
    
    if (!Roles.userIsInRole(userId, ['admin'])) {
      console.log("Admin does not have admin role. Huh, weird...");
      Roles.addUsersToRoles(userId, ['admin']);
    }
    else
    {
      console.log("Admin has admin role. PHEW!");
    }
  }
});
