var quitterApp = angular.module('quitterApp', []);






angular.module('quitterApp')
.controller('PostsCtrl', function ($scope, PostsSvc) {
    $scope.addPost = function () {
        if ($scope.postBody) {
            PostsSvc.create({
                username: "Default User",
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

});


angular.module('quitterApp')
.service('PostsSvc', function($http){
    this.fetch = function(){
        return $http.get('http://localhost:3000/api/posts');
    }
    this.create = function(post){
        console.log(post);
        return $http.post('http://localhost:3000/api/posts', post);
    }
});