// app.js
var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope, $http) {
    $scope.x= console.log;
    // serpatate into service
    var feedReader = function (data, titlesArray){
        var feedArray = [];
        var feedArray1 = [];
        var DataLength = data.feed.entry.length;
        
        for(var i=0; i< DataLength; i++){
        //init
             var row = [];
             var row1 = {};
            for(var j=0; j< titlesArray.length; j++){
                var title = data.feed.entry[i][titlesArray[j]]['$t'];
                console.log(title);
                var y = titlesArray[j]
                y = y.split("$").pop();
                var x ={};
                x[y] = title;
                row.push(x);
                row1[y] = title;
                console.log(x);
                
            }
            feedArray.push(row);
            feedArray1.push(row1);
            // push
        }
        //console.log(feedArray);
        //console.log(feedArray1);
        $scope.feedArray = feedArray1;
        $scope.myData = feedArray1;
    }
     $scope.tArray =[ "gsx$ticker", "gsx$industry", "gsx$marketcap",  "gsx$price",  "gsx$change" , "gsx$volume"];    
     
     $scope.tArray2 =[ {headerClass: 'gsx$tickerHead', cellClass:"gsx$ticker", field:'ticker', displayName:'Ticker'}, {cellClass:"gsx$industry", field:'industry', displayName:'Industry'}, {cellClass:"gsx$marketcap", field:'marketcap', displayName:'Market Cap'},  {cellClass:"gsx$price", field:'price', displayName:'Price'},  {cellClass:"gsx$change",field:'change', displayName:'Change',  cellTemplate: '<div ng-class="((row.getPropertyNumber(col.field))>=0)? \' green\':\' red\'"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'}, {cellClass:"gsx$volume", field:'volume', displayName:'Volume' }];

   $http.get('https://spreadsheets.google.com/feeds/list/18kEw2WXq6uhT9C0OE7uvocDVRahm245eAEpl3AVdl_4/o8ol38h/public/values?alt=json')
  .success(function (data, status) {
    feedReader(data, $scope.tArray);
   // $scope.myData = $scope.feedArray1;
  })
  .error(function (data, status) {
    console.log("status"+status);
    console.log("data"+data);
  });

    console.log($scope.myData);
    $scope.gridOptions = { 
      data: 'myData', 
      enableCellSelection: false,
      enableRowSelection: false,
      columnDefs: 'tArray2' 
    };
});
