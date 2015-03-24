quitterApp
.service('PostsSvc', function($http){
    this.fetch = function(){
        return $http.get('http://localhost:3000/api/posts');
    }
    this.create = function(post){
        console.log(post);
        return $http.post('http://localhost:3000/api/posts', post);
    }
});
