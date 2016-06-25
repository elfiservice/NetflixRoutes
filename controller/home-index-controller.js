angular.module('NetflixRouter')
       .controller('HomeIndexController', function($http) {
            this.preload = false;
            $http.get("#/index");
			

			
        });


   /*this.togglePreload = function() {
            return (this.preload = (!this.preload));
        
        
        this.showForm() {
            
        }*/
		
