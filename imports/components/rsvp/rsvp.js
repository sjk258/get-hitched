import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

import template from './rsvp.html';

class RsvpController {
  constructor($scope) {
    $scope.viewModel(this);

    this.loginForm = {};
    this.createForm = {};

    this.helpers({
      isLoggedIn() {
        return  Meteor.user();
      },
      users() {
        return Meteor.users.find({});
      },
      isAdmin() {
        user = Meteor.user();
        return Roles.userIsInRole(Meteor.userId(), 'admin');
      }
    });

    Accounts.onCreateUser = function(options, user) {
      return;
    };
  }

  submitLogin() {
    Meteor.loginWithPassword(this.loginForm.userId, this.loginForm.password);
    this.loginForm = {};
  }

  submitAddUser() {
    Meteor.call('createUser', { username: this.createForm.userId, password: this.createForm.password });

    this.createForm =  {};
  }

  logout() {
    Meteor.logout();
  }
}

export default angular.module('rsvp', [
  angularMeteor
  ]).component('rsvp', {
    templateUrl: 'imports/components/rsvp/rsvp.html',
    controller: ['$scope', RsvpController]
});