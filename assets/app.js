var quitterApp=angular.module("quitterApp",[]);angular.module("quitterApp").controller("PostsCtrl",function(t,o){t.addPost=function(){t.postBody&&o.create({username:"Default User",body:t.postBody}).success(function(o){t.posts.unshift(o),t.postBody=null})},o.fetch().success(function(o){t.posts=o})}),angular.module("quitterApp").service("PostsSvc",function(t){this.fetch=function(){return t.get("http://localhost:3000/api/posts")},this.create=function(o){return console.log(o),t.post("http://localhost:3000/api/posts",o)}});