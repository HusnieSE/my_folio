var portApp = angular.module('portApp', ['ui.router', 'duScroll']);

portApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('app', {
		url:'/',
		views: {

			'main@':{
				templateUrl:'main/section/section.html',
				controller:'portController'
			},

			'content@':{
				templateUrl:'main/section/content/home.html',
				// controller:'portController'
			}
		}
		
	})
}])