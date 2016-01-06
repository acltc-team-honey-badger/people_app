(function () {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope, $http) {

    $scope.setup = function() {
      $http.get("/api/v1/people.json").then(function(response) {
        $scope.people = response.data;
      });
      
    }

    $scope.toggleVisibility = function(person) {
      person.bioVisible = !person.bioVisible;
    }

    $scope.addPerson = function(name, bio) {
      var newPerson = {
        name: name,
        bio: bio,
        bioVisible: false
      }
      $scope.people.push(newPerson);
    }

    $scope.deletePerson = function(index) {
      $scope.people.splice(index, 1);
    }



  window.$scope = $scope;    
  });
})();