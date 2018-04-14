import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './storySoFar.html';

class StorySoFarController {
  constructor($scope) {
    $scope.viewModel(this);
    this.author = 'steve';
  }
}

export default angular.module('storySoFar', [
  angularMeteor
  ]).component('storySoFar', {
    templateUrl: 'imports/components/storySoFar/storySoFar.html',
    controller: ['$scope', StorySoFarController]
});