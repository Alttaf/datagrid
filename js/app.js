var app = angular
          .module("TRT", ["ui.bootstrap"])
          .config(["$routeProvider", function($routeProvider){
            $routeProvider
              .when("/", { templateUrl: 'template.html', controller: 'DemoCtl' });
          }]);
          
app.controller("DemoCtl", ["$scope", "$dialog", function($scope, $dialog){
  $scope.launch = function() {
    var d = $dialog.dialog({
      backdrop: true,
      keyboard: true,
      windowClass : "datagridModal",
      backdropClick: true,
      templateUrl: "dialog.html",
      controller: "DialogCtl"
    });
    
    d.open().then(function(result) { console.log("d.open().then"); });
  };
}]);

app.controller("DialogCtl", ["$scope", "dialog", function($scope, dialog){
  $scope.data = [
      { id: 1, name: 'test', color: 'red' },
      { id: 2, name: 'foo', color: 'regreen' },
      { id: 3, name: 'bar', color: 'blue' }
    ];
    
    $scope.close = function(result) {
      console.log("DialogCtrl.close");
      dialog.close(true);
    };
}]);