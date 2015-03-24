quitterApp.directive('mc-enter', function(){
    return function(scope, element, attrs){
       element.bind('mouseenter', function(){
           element.addClass(attrs.mc-enter);
       });
    }
});
quitterApp.directive('mc-leave', function(){
    return function(scope, element, attrs){
       element.bind('mouseleave', function(){
           element.removeClass(attrs.mc-enter);
       });
    }
});