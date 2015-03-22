angular.module('quitterApp')
    .controller('LoginCtrl', function(UserSvc, $location,$window){
        this.login = function(username, password){
            UserSvc.login(username, password)
                .then(function(user){
                    $scope.$emit('login', user);
                    console.log(user);
                    $window.localStorage.token = user.token;
                    $location.path('/');
        });
    };
});
