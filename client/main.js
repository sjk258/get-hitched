import angular from 'angular';
import angularMeteor from 'angular-meteor';

import weddingFrame from '../imports/components/weddingFrame/weddingFrame';
import welcomeInformation from '../imports/components/welcomeInformation/welcomeInformation';
 
angular.module('candice-and-steve-get-hitched', [
  angularMeteor,
  weddingFrame.name,
  welcomeInformation.name
]);