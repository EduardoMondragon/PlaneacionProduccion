angular.module('firebase.config', [])
  .constant('FBURL', 'https://blogues-5b4c4.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
