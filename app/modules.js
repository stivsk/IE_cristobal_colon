(function(){
	var app = angular.module('cristobal',['ngRoute']);

	app.config(function($routeProvider, $locationProvider){
		$routeProvider
			.when('/',{
				templateUrl : 'app/components/home/homeView.html',
				controller 	: 'homeController'
			})
			.when('/institucion',{
				templateUrl : 'app/components/institucion/institucionView.html',
				controller 	: 'institucionController'
			})
			.when('/comunidad',{
				templateUrl	: 'app/components/comunidad/comunidadView.html',
				controller 	: 'comunidadController'
			})
			.when('/galerias',{
				templateUrl	: 'app/components/galerias/galeriasView.html',
				controller 	: 'galeriasController'
			})
			.when('/contacto',{
				templateUrl	: 'app/components/contacto/contactoView.html',
				controller 	: 'contactoController'
			});

		$locationProvider.html5Mode(true);
	});


	//COMPONENTS CONTROLLERS//

	app.controller('homeController', function(){
		this.politic = politicContent;
		this.values = valuesContent;
		this.mvs = mvsContent;
	});

	app.controller('institucionController', function(){
		this.message = 'wassaaaaaaa'
	});

	app.controller('comunidadController', function(){
		this.message = 'wassaaaaaaa'
	});

	app.controller('galeriasController', function(){
		this.message = 'wassaaaaaaa'
	});

	app.controller('contactoController', function(){
		this.message = 'wassaaaaaaa'
	});

	// SHARED CONTROLLERS //

	app.controller('menuController', function(){
		this.items = menuItems;
	});

	app.controller('carouselController',function(){
		this.blocks = carouselContent;
	});

})();