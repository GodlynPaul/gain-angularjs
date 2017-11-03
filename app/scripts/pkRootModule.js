
define([
    'angular',
    './globalDependencyLoader',
    './router-config'
], function (angular) {
    console.log("CodeReach : pkRootModule.JS");
    var popKartApp = angular.module('popKartRootModule', [
      'firstChildModule',
      'electronics'
    ]);
    return popKartApp;
});
