angular.module('quitterApp')
    .controller('ApplicationCtrl', function($scope){
        $scope.$on('login', function(_, user){
            $scope.currentUser = user;
        });
    });