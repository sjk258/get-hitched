import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './weddingFrame.html';

class WeddingFrameController {
  constructor($scope) {
    $scope.viewModel(this);

    this.selectedPage = "welcome";
  }

  selectWelcome() {
    this.selectedPage = "welcome";
  }

  selectHowDidThisHappen() {
    this.selectedPage = "how-did-this-happen";
  }

  selectVenueAndTravel() {
    this.selectedPage = "venue-and-travel";
  }

  selectRegistry() {
    this.selectedPage = "registry";
  }

  selectPhotos() {
    this.selectedPage = "photos";
  }

  selectSurvey() {
    this.selectedPage = "survey";
  }

  selectRsvp() {
    this.selectedPage = "rsvp";
  }
}

export default angular.module('weddingFrame', [
  angularMeteor
  ]).component('weddingFrame', {
    templateUrl: 'imports/components/weddingFrame/weddingFrame.html',
    controller: ['$scope', WeddingFrameController]
});