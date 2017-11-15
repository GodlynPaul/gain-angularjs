/**
All the files which need to be loaded has to be injected here in the define area
**/

define([
  './controllers/baseStructure',
  './controllers/mobileDevices',
  './controllers/complaints',
  './controllers/customers',
  './controllers/employee',
  './router-config'
],function(){
  console.log("CodeReach :globalDependencyLoader");
});
