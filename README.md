# gain-angularjs
This contains vartious operations which are performed in Angular V1

#FLOW OF CONTROL
-> Load index.html
-> Load require.js and from its data-main attribute it load require-config.js
-> Load all the dependent libraries from the path object and from the deps:bootstrap.js it does quick load
-> Load the manaulBootstrap.js  
  -> Here it load all dependencies and then when the DOM is ready it does the manaul Angular bootstrap on parentModule
