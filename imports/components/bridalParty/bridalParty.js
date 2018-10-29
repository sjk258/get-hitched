import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './weddingFrame.html';

class WeddingFrameController {
  constructor($scope) {
    $scope.viewModel(this);

    this.selectedPage = "welcome";

    var quotes = [
      {
        text: "People always do crazy things, when they're in love.",
        author: "Hercules"
      },
      {
        text: "My dearest friend, if you don't mind, I'd like to join you by your side. Where we could gaze into the stars, and sit together, now and forever. For it is plain as anyone could see, we're simply meant to be.",
        author: "Jack Skellington"
      }
    ];
    this.quote = quotes[Math.floor(Math.random() * quotes.length)];
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