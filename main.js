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
    occupation: 'UI / UX Developer',
    description: 'UI / UX Developer with a passion for designing beautiful and functional user experiences. Minimalist who believes that less is more.'
  }
});
