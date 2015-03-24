var quitterApp=angular.module("quitterApp",["ngRoute"]);angular.module("quitterApp").controller("ApplicationCtrl",["$scope",function(t){t.$on("login",function(e,n){t.currentUser=n})}]),quitterApp.directive("mcenter",function(){return function(t,e,n){e.bind("mouseenter",function(){e.addClass(n.mcenter)})}}),quitterApp.directive("mcleave",function(){return function(t,e,n){e.bind("mouseleave",function(){e.removeClass(n.mcenter)})}}),angular.module("quitterApp").controller("LoginCtrl",["$scope","UserSvc","$location","$window",function(t,e,n,o){t.login=function(r,s){e.login(r,s).then(function(e){t.$emit("login",e),console.log(e),o.localStorage.token=e.token,n.path("/")})}}]),angular.module("quitterApp").controller("PostsCtrl",["$scope","PostsSvc",function(t,e){t.addPost=function(){t.postBody&&e.create({username:"mattc",body:t.postBody}).success(function(e){t.posts.unshift(e),t.postBody=null})},e.fetch().success(function(e){t.posts=e})}]),quitterApp.service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("http://localhost:3000/api/posts")},this.create=function(e){return console.log(e),t.post("http://localhost:3000/api/posts",e)}}]),angular.module("quitterApp").controller("RegisterCtrl",["$scope","UserSvc","$location",function(t,e,n){t.register=function(o,r){e.register(o,r).then(function(e){t.$emit("login",e),n.path("/")})}}]),angular.module("quitterApp").config(["$routeProvider",function(t){t.when("/",{controller:"PostsCtrl",templateUrl:"/templates/posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"/templates/register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"/templates/login.html"})}]),angular.module("quitterApp").service("UserSvc",["$http","$window",function(t,e){var n=this;n.getUser=function(){return t.get("/users").then(function(t){return t.data})},n.login=function(o,r){return t.post("/sessions",{username:o,password:r}).then(function(o){return console.log("Res"+o.data),e.localStorage.setItem("access_token",o.data),t.defaults.headers.common["X-Auth"]=o.data,n.getUser()})},n.register=function(e,o){return t.post("/users",{username:e,password:o}).then(function(){return n.login(e,o)})}}]);