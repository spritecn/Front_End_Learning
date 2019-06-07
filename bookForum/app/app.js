'use strict';

angular.module('app', [
  'ngCookies',  // 在程序中访问Cookie
  'ngSanitize', // 对html内容进行净化，以防范xss等前端攻击
  'ngResource', // 访问REST对象
  'ui.router'   // 第三方的路由访问器
]);
