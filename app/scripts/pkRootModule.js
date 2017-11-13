
define([
    'angular',
    './globalDependencyLoader'
], function (angular) {
    console.log("CodeReach : pkRootModule.JS");
    var popKartApp = angular.module('popKartRootModule', [
      'baseModule',
      'electronics',
      'ngRoute',
      'ui.grid',
      'ui.grid.edit',
      'ui.grid.resizeColumns',
      'ui.grid.moveColumns',
      'ui.grid.pinning'
    ]);
    return popKartApp;
});
