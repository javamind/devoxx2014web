'use strict';

angular.module('devoxxwebApp', [
        'ngResource',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/conference', {
                templateUrl: 'views/conference.html',
                controller: 'ConferenceCtrl'
            })
            .when('/talk', {
                templateUrl: 'views/talk.html',
                controller: 'TalkCtrl'
            })
            .when('/speaker', {
                templateUrl: 'views/speaker.html',
                controller: 'SpeakerCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
