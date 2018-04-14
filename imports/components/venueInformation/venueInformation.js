import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './venueInformation.html';

class VenueInformationController {
  constructor($scope) {
    $scope.viewModel(this);
  }
}

export default angular.module('venueInformation', [
  angularMeteor
  ]).component('venueInformation', {
    templateUrl: 'imports/components/venueInformation/venueInformation.html',
    controller: ['$scope', VenueInformationController]
});