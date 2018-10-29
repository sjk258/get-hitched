import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './weddingDetails.html';

class WeddingDetailsController {
  constructor($scope) {
    $scope.viewModel(this);
  }
}

export default angular.module('weddingDetails', [
  angularMeteor
  ]).component('weddingDetails', {
    templateUrl: 'imports/components/weddingDetails/weddingDetails.html',
    controller: ['$scope', WeddingDetailsController]
});