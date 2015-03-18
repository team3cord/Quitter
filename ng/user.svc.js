angular.module('quitterApp')
    .service('UserSvc', function ($http) {
        var svc = this;
        svc.getUser = function () {
            return $http.get('/users')
                .then(function (response) {
                    return response.data;
                });
        };
        svc.login = function (username, password) {
            return $http.post('/sessions', {
                username: username, password: password
            }).then(function (response) {
                svc.token = response.data;
                $http.defaults.headers.common['X-Auth'] = response.data;
                return svc.getUser();
                console.log("our token:" + svc.token);
            });
        };
        svc.register = function (username, password) {
            return $http.post('/users', {
                username: username, password: password
            }).then(function () {
                return svc.login(username, password);
            });
        };
});
