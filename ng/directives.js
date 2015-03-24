angular.module('quitterApp').directive('mcenter', function(){
    return function(scope, element, attrs){
       element.bind('mouseenter', function(){
           element.addClass(attrs.mcenter);
       });
    }
})
.directive('mcleave', function(){
    return function(scope, element, attrs){
       element.bind('mouseleave', function(){
           element.removeClass(attrs.mcenter);
       });
    }
});