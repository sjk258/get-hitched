import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './welcomeInformation.html';

class WelcomeInformationController {
  constructor($scope) {
    $scope.viewModel(this);
  }
}

export default angular.module('welcomeInformation', [
  angularMeteor
  ]).component('welcomeInformation', {
    templateUrl: 'imports/components/welcomeInformation/welcomeInformation.html',
    controller: ['$scope', WelcomeInformationController]
});