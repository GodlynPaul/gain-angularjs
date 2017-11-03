require.config({
  baseUrl:'',
  paths : {
    'angular' : './node_modules/angular/angular',
    'jquery':'./node_modules/jquery/dist/jquery',
    'domReady': './node_modules/requirejs-domready/domReady',
    'angular-route':'./node_modules/angular-route/angular-route'
  },
  shim: {
    'angular':{
      exports : 'angular',
      deps: ['jquery']
    },
    'angular-route':{
      deps:['angular']
    },
  },
  deps:['./app/manualBootstrap']
});
