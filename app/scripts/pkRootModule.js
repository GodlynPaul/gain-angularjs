
define([
    'angular',
    './globalDependencyLoader'
], function (angular) {
    console.log("CodeReach : pkRootModule.JS");
    var popKartApp = angular.module('popKartRootModule', [
      'baseModule',
      'electronics',
      'ngRoute'
    ]);
    return popKartApp;
});
