window.angular.module('iswf.services.global', [])
    .factory('Global', function() {
        var current_user = window.user;
        return {
            currentUser: function() {
                return current_user;
            },
            isSignedIn: function() {
                return !!current_user;
            }
        };
    });
