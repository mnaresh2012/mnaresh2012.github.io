var App = angular.module('myApp', []);

App.controller('MainController', function ($scope) {
  $scope.app = {
    name: 'mr. naresh kumar',
    occupation: 'UI Developer',
    email: ' mnaresh2010@aol.com',
    title: 'mr. naresh kumar',
    phone: '+91 900 801 8384'
  };
});

App.controller('MainContentController', function ($scope) {
  $scope.appData = {
    name: 'mr. naresh kumar',
    authorImg: 'https://avatars3.githubusercontent.com/u/3023566?v=3&amp;s=460',
    occupation: 'UI / UX Developer',
    description: 'UI / UX Developer with a passion for designing beautiful and functional user experiences. Minimalist who believes that less is more.',
    technology: {
      rowOne: {
        js: 'javaScript',
        jq: 'jQuery / jQuery UI / jQuery Mobile',
        backbone: 'Backbone.js',
        angular: 'angular.js',
        d3: 'D3.js',
        easel: 'easel.js',
        bootstrap: 'Bootstrap'
      },
      rowTwo: {
        html: 'HTML / HTML5',
        css: 'CSS / CSS3',
        ls: 'LESS / SASS',
        hb: 'Handlebar.js',
        mu: 'Mustache.js'
      },
      rowThree: {
        ap: 'Adobe Photoshop',
        ai: 'Adobe Illustrator',
        as3: 'Actionscript  3.0',
        flash: 'Adobe Flash',
        underscore: 'underscore.js'
      },
      rowFour: {
        grunt: 'Grunt.js / Gulp.js',
        require: 'require.js',
        teamcity: 'Teamcity',
        ud: 'uDeploy'
      }
    }
  }
});
