angular.module('quitterApp')
    .controller('MemberListCtrl', function($scope, MemberListSvc){
        MemberListSvc.fetch()
            .success(function(users){
                $scope.members = users;
            });
    });