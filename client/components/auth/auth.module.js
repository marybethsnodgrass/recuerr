'use strict';

angular.module('rescueRrApp.auth', [
  'rescueRrApp.constants',
  'rescueRrApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
