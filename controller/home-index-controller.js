var apiUrl = "http://netflixroulette.net/api/api.php?";
angular.module('NetflixRouter')
       .controller('HomeIndexController', function($http) {
            this.preload = false;
            $http.get("#/index");
        });


angular.module('NetflixRouter')
       .controller('FormController', function($http, $routeParams) {
            this.type;
            this.name;
            var form = this;
            
            this.getFlixJson = function () {            
                $http.get(apiUrl+this.type+"="+this.name)
                    .success(function(result) {
                    form.info = result;
                    console.log(form);
                    
                    }).error(function(error){
                        console.log(error.message);
                    })
            }
            
        });