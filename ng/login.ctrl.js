angular.module('quitterApp')
    .controller('LoginCtrl', function($scope, UserSvc){
        $scope.login = function(username, password){
            UserSvc.login(username, password)
                .then(function(user){
                    console.log(user);
                });
        }
    });