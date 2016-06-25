angular.module('NetflixRouter')
       .controller('HomeIndexController', function($http) {
        this.preload = false;
    
        this.togglePreload = function() {
            return (this.preload = (!this.preload));
        }
        
        });