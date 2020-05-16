//create module
var app=angular.module("myApp",[]);

//create controller
//$scope does the transaction between controller and view.
app.controller("myController",function($scope){
	$scope.name="Sameer Hakke";
	$scope.designation="Student";
});
