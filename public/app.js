var quitterApp = angular.module('quitterApp', [
    'ngRoute'
]);


angular.module('quitterApp')
    .controller('ApplicationCtrl', ["$scope", function($scope){
        $scope.$on('login', function(_, user){
            $scope.currentUser = user;
        });
    }]);

quitterApp.directive('mcenter', function(){
    return function(scope, element, attrs){
       element.bind('mouseenter', function(){
           element.addClass(attrs.mcenter);
       });
    }
});
quitterApp.directive('mcleave', function(){
    return function(scope, element, attrs){
       element.bind('mouseleave', function(){
           element.removeClass(attrs.mcenter);
       });
    }
});


angular.module('quitterApp')
    .controller('LoginCtrl', ["$scope", "UserSvc", "$location", "$window", function($scope, UserSvc, $location,$window){
        $scope.login = function(username, password){
            UserSvc.login(username, password)
                .then(function(user){
                    $scope.$emit('login', user);
                    console.log(user);
                    $window.localStorage.token = user.token;
                    $location.path('/');
        });
    };
}]);

angular.module('quitterApp')
.controller('PostsCtrl', ["$scope", "PostsSvc", function ($scope, PostsSvc) {
    $scope.addPost = function () {
        if ($scope.postBody) {
            PostsSvc.create({
                username: 'mattc',
                body: $scope.postBody
            })
                .success(function (post) {
                    $scope.posts.unshift(post)
                    $scope.postBody = null;
                });
        }
    }
    PostsSvc.fetch()
        .success(function(posts){
            $scope.posts = posts
        });

}]);


quitterApp
.service('PostsSvc', ["$http", function($http){
    this.fetch = function(){
        return $http.get('http://localhost:3000/api/posts');
    }
    this.create = function(post){
        console.log(post);
        return $http.post('http://localhost:3000/api/posts', post);
    }
}]);

angular.module('quitterApp')
    .controller('RegisterCtrl', ["$scope", "UserSvc", "$location", function($scope, UserSvc, $location){
        $scope.register = function (username, password){
            UserSvc.register(username, password)
                .then(function(user){
                    $scope.$emit('login', user);
                    $location.path('/');
                });
        };

    }]);

angular.module('quitterApp')
    .config(["$routeProvider", function ($routeProvider){
        $routeProvider
            .when('/',         {controller: 'PostsCtrl', templateUrl: '/templates/posts.html'})
            .when('/register', {controller: 'RegisterCtrl', templateUrl: '/templates/register.html'})
            .when('/login',    {controller: 'LoginCtrl', templateUrl: '/templates/login.html'});
}]);

angular.module('quitterApp')
    .service('UserSvc', ["$http", "$window", function ($http, $window) {
        var svc = this;
        svc.getUser = function () {
            return $http.get('/users',{
                headers: {'X-Auth': this.token}
            })
                .then(function (response) {
                    return response.data;
                });
        };
        svc.login = function (username, password) {
            return $http.post('/sessions', {
                username: username, password: password
            }).then(function (response) {
           //     console.log("Res" + response.data);
            //    $window.localStorage.setItem('access_token',response.data);
                svc.token = response.data;
                $http.defaults.headers.common['X-Auth'] = response.data;
                return svc.getUser();
            });
        };
        svc.register = function (username, password) {
            return $http.post('/users', {
                username: username, password: password
            }).then(function () {
                return svc.login(username, password);
            });
        }
}]);
