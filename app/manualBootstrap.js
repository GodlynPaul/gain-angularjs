/**
The angular does the bootstrap on the predefined module with the name parentModule
**/

define([
  'require',
  'angular',
  'angular-route',
  'domReady',
  './scripts/router-config',
  './scripts/pkRootModule',
],function (require, angular, ngRoute, domReady, routerConfig, popKartRootModule){
  'use strict';
  console.log("Code Reach : Bootstrap.JS ");
  domReady(function(){
      angular.bootstrap(document,['popKartRootModule']);
  });
})
