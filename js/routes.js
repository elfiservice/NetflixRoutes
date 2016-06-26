angular.module('NetflixRouter')
       .config(function($routeProvider){
              $routeProvider.when('/', {
                templateUrl: 'templates/pages/home/index.html'                
              })
              
              .when('/formconsulta',{
                  templateUrl: 'templates/pages/consulta/form-consulta.html',
                  controller: 'FormController',
                  controllerAs: 'fc'
              })
              
              .otherwise({
                  templateUrl: 'templates/pages/home/index.html'
              })
        })