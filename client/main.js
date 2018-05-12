import angular from 'angular';
import angularMeteor from 'angular-meteor';

import weddingFrame from '../imports/components/weddingFrame/weddingFrame';
import welcomeInformation from '../imports/components/welcomeInformation/welcomeInformation';
import storySoFar from '../imports/components/storySoFar/storySoFar';
import rsvp from '../imports/components/rsvp/rsvp';
import pictures from '../imports/components/pictures/pictures';
import venueInformation from '../imports/components/venueInformation/venueInformation';
import registry from '../imports/components/registry/registry';

// From 'dotansimha:accounts-ui-angular'
import { Accounts } from 'meteor/accounts-base';

angular.module('candice-and-steve-get-hitched', [
  angularMeteor,
  weddingFrame.name,
  welcomeInformation.name,
  storySoFar.name,
  rsvp.name,
  pictures.name,
  venueInformation.name,
  registry.name,
  'accounts.ui'
]);