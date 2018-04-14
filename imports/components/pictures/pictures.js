import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './pictures.html';

class PicturesController {
  constructor($scope) {
    $scope.viewModel(this);
  }
}

export default angular.module('pictures', [
  angularMeteor
  ]).component('pictures', {
    templateUrl: 'imports/components/pictures/pictures.html',
    controller: ['$scope', PicturesController]
});