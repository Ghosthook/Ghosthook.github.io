// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZzzW8FgocSeU2eMQEfOWrmifzJOK92ag",
    authDomain: "project02-77078.firebaseapp.com",
    databaseURL: "https://project02-77078.firebaseio.com",
    projectId: "project02-77078",
    storageBucket: "project02-77078.appspot.com",
    messagingSenderId: "1063215860751"
  };
  firebase.initializeApp(config);

   var app = angular.module("app", ["firebase"]);

  app.factory("kommentarer", function($firebaseArray) {
      var ref = firebase.database().ref().child("kommentarer").child(kommentarsfalt);
      return $firebaseArray(ref);
  });

  app.controller("KommentarControl", function($scope, kommentarer) {
      $scope.kommentarer = kommentarer;

      //Definera en kommentar med tom text och skribent
      $scope.kommentar = {
          text: "", 
          skribent: "",
          time: ""
     };
    
      
      $scope.addComment = function() {
        var currentdate = new Date();
        var datetime = currentdate.getHours() + ":"
        + currentdate.getMinutes();
        $scope.kommentar.time = datetime;
        console.log($scope.kommentar);
        $scope.kommentarer.$add($scope.kommentar);
      }

        $scope.kommentar = {
        text: "", 
        skribent: "", 
        time: "",  
        }
});


// let's create a re-usable factory that generates the $firebaseAuth instance
app.factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
        return $firebaseAuth();
    }
]);
