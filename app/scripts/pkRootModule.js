
define([
    'angular',
    './globalDependencyLoader'
], function (angular) {
    console.log("CodeReach : ParentModule.JS");
    var popKartApp = angular.module('popKartRootModule', ['firstChildModule']);
    return popKartApp;
});
