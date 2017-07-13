var apiUrl = "https://netflixroulette.net/api/api.php?";
angular.module('NetflixRouter')
       .controller('HomeIndexController', function($http) {
            $http.get("#/index");
       });

angular.module('NetflixRouter')
       .controller('FormController', function($http, $routeParams) {
            this.type;
            this.name;
            this.info = [];
			var form = this;
            this.preload = false;
            this.noResult = false;
            
            this.getFlixJson = function () {      
			form.preload = true;
            $http.get(apiUrl+this.type+"="+this.name)
                    .success(function(result) {
                    form.noResult = false;
                    form.info = [];
                    if(result.length > 1) {
                        for(r in result) {
                            form.info.push(result[r]);    
                        }    
                     } else {
                        form.info.push(result);    
                    }
                
                    form.preload = false;
                    console.log(result);
					
                    }).error(function(error){
                         form.preload = false;
                         form.noResult = true;
                         console.log(error.message);
                    })
                
            }
        });		
		
angular.module('NetflixRouter')
       .controller('FilmeExibirController', function($http, $routeParams) {
	   this.preload = true;
       var controllerExibir = this;
					
        $http.get(apiUrl+'title=' + $routeParams.id)
            .success(function(result) {
            controllerExibir.filme = result;
            console.log(controllerExibir);


            }).error(function(error){

                console.log(error.message);
            })
            this.preload = false;            
        });		
