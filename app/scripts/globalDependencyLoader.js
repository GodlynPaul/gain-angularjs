/**
All the files which need to be loaded has to be injected here in the define area
**/

define([
  './controllers/baseStructure',
  './controllers/mobileDevices',
  './controllers/complaints',
  './router-config'
],function(){
  console.log("CodeReach :globalDependencyLoader");
});
