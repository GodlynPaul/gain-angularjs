
define([
    'angular',
    './globalDependencyLoader'
], function (angular) {
    console.log("CodeReach : pkRootModule.JS");
    var popKartApp = angular.module('popKartRootModule', [
      'firstChildModule',
      'electronics',
      'ngRoute'
    ]);
    return popKartApp;
});
