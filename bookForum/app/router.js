'use strict';

angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('default', {
    url: '',
    templateUrl: 'controllers/home/index.html',
    controller: 'HomeIndexCtrl'
  });

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'controllers/home/index.html',
    controller: 'HomeIndexCtrl'
  });

  $stateProvider.state('notFound', {
    url: '/notFound',
    templateUrl: 'controllers/home/notFound.html',
    controller: 'HomeNotFoundCtrl'
  });
    $stateProvider.state('reader',{
    url:'/reader',
    template:'<div ui-view></div>',
    abstract: true
  });

  $stateProvider.state('reader.create',{
      url:'/create',
      templateUrl:'/controllers/reader/create.html',
      controller:'readerCreateCtrl as vm'
  });

  $urlRouterProvider.otherwise('/notFound');
});
