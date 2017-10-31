define([
  'angular'
], function (angular) {
    'use strict';
    console.log("In firstChildModule");
    var app = angular.module('firstChildModule', []);
    return app;
});
