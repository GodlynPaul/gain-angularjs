
define([
    'angular',
    './globalDependencyLoader'
], function (angular) {
    console.log("CodeReach : pkRootModule.JS");
    var popKartApp = angular.module('popKartRootModule', [
      'baseModule',
      'electronics',
      'employeeModule',
      'ngRoute',
      'ui.grid',
      'ui.grid.edit',
      'ui.grid.resizeColumns',
      'ui.grid.moveColumns',
      'ui.grid.pinning',
      'ui.grid.pagination',
      'ui.grid.selection',
      'ui.grid.exporter'
    ]);
    return popKartApp;
});
