require.config({
  baseUrl:'',
  paths : {
    'angular' : './node_modules/angular/angular',
    'jquery':'./node_modules/jquery/dist/jquery',
    'domReady': './node_modules/requirejs-domready/domReady',
    'angular-route':'./node_modules/angular-route/angular-route',
    'ui-grid':"node_modules/angular-ui-grid/ui-grid",
    'pdfmake':'node_modules/pdfmake/build/vfs_fonts',
    'pdfMakeLib':'node_modules/pdfmake/build/pdfmake'
  },
  shim: {
    'angular':{
      exports : 'angular',
      deps: ['jquery']
    },
    'angular-route':{
      deps:['angular']
    },
    'ui-grid':{
      deps:['angular']
    },
    'pdfmake' :
    {
      deps: ['pdfMakeLib'],
      exports: 'pdfMake'
    },
  },
  deps:['./app/manualBootstrap']
});
