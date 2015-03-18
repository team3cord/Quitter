var quitterApp=angular.module("quitterApp",["ngRoute"]);angular.module("quitterApp").controller("ApplicationCtrl",["$scope",function(t){t.$on("login",function(e,o){t.currentUser=o})}]),angular.module("quitterApp").controller("LoginCtrl",["$scope","UserSvc","$location","$window",function(t,e,o,n){t.login=function(r,s){e.login(r,s).then(function(e){t.$emit("login",e),console.log(e),n.localStorage.token=e.token,o.path("/")})}}]),angular.module("quitterApp").controller("PostsCtrl",["$scope","PostsSvc",function(t,e){t.addPost=function(){t.postBody&&e.create({username:"mattc",body:t.postBody}).success(function(e){t.posts.unshift(e),t.postBody=null})},e.fetch().success(function(e){t.posts=e})}]),angular.module("quitterApp").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("http://localhost:3000/api/posts")},this.create=function(e){return console.log(e),t.post("http://localhost:3000/api/posts",e)}}]),angular.module("quitterApp").controller("RegisterCtrl",["$scope","UserSvc","$location",function(t,e,o){t.register=function(n,r){e.register(n,r).then(function(e){t.$emit("login",e),o.path("/")})}}]),angular.module("quitterApp").config(["$routeProvider",function(t){t.when("/",{controller:"PostsCtrl",templateUrl:"/templates/posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"/templates/register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"/templates/login.html"})}]),angular.module("quitterApp").service("UserSvc",["$http",function(t){var e=this;e.getUser=function(){return t.get("/users").then(function(t){return t.data})},e.login=function(o,n){return t.post("/sessions",{username:o,password:n}).then(function(o){return e.token=o.data,t.defaults.headers.common["X-Auth"]=o.data,e.getUser()})},e.register=function(o,n){return t.post("/users",{username:o,password:n}).then(function(){return e.login(o,n)})}}]);