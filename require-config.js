require.config({
  baseUrl:'',
  paths : {
    'angular' : './node_modules/angular/angular',
    'domReady': './node_modules/requirejs-domready/domReady'
  },
  shim: {
    'angular':{
      exports : 'angular'
    }
  },
  deps:['./app/manualBootstrap']
});
