angular.module('MyApp',['appRoutes','mainCntrl','authService','userCtrl','userService','storyService','storyCtrl','reverseDirectives'])


.config(function($httpProvider){
	$httpProvider.interceptors.push('AuthInterceptor');
})