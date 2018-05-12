import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './registry.html';

class RegistryController {
  constructor($scope) {
    $scope.viewModel(this);
  }
}

export default angular.module('registry', [
  angularMeteor
  ]).component('registry', {
    templateUrl: 'imports/components/registry/registry.html',
    controller: ['$scope', RegistryController]
});