/**
The angular does the bootstrap on the predefined module with the name parentModule
**/

define([
  'require',
  'angular',
  './pkRootModule',
  'domReady'
],function (require, angular, parentModule,domReady){
  'use strict';
  console.log("Code Reach : Bootstrap.JS ");
  domReady(function(){
      angular.bootstrap(document,['popKartRootModule']);
  })
})
