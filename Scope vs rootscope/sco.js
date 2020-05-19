//create module
var app=angular.module("myApp",[]);

//create first controller
app.controller("controller1",function ($scope,$rootScope) {

	//local $scope is used within the controller1.
	$scope.name="Sameer Hakke";

	//global $rootscope used anywhere 
	$rootScope.msg1="Hey......It's Controller1..";

});

//create second controller 
app.controller("controller2",function ($scope,$rootScope) {

	$scope.name="Omkar Jamdar";

	//we already used 'msg1' as a variable name so change the variable name.
	$rootScope.msg2="Hey......It's Controller2....";

});
//So,the 'scope' used for declare local variable and 'rootScope' is used for global variable declaration.
