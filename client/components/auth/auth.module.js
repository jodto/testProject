'use strict';

angular.module('schoolsampleApp.auth', [
  'schoolsampleApp.constants',
  'schoolsampleApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
