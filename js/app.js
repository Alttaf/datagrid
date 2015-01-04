// app.js
var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope, $http) {

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
        console.log(feedArray);
        console.log(feedArray1);
        $scope.feedArray = feedArray1;
        $scope.myData = feedArray1;
    }
     $scope.tArray =[ "gsx$ticker", "gsx$industry", "gsx$marketcap",  "gsx$price",  "gsx$change" , "gsx$volume"];    
     
     $scope.tArray2 =[ {cellClass:"gsx$ticker", field:'gsx$ticker', displayName:'Ticker'}, {cellClass:"gsx$industry", field:'gsx$industry', displayName:'Industry'}, {cellClass:"gsx$marketcap", field:'gsx$marketcap', displayName:'Market Cap'},  {cellClass:"gsx$price", field:'gsx$price', displayName:'Price'},  {cellClass:"gsx$change",field:'gsx$change', displayName:'Change' }, {cellClass:"gsx$volume", field:'gsx$volume', displayName:'Volume' }];

   $http.get('https://spreadsheets.google.com/feeds/list/18kEw2WXq6uhT9C0OE7uvocDVRahm245eAEpl3AVdl_4/o8ol38h/public/values?alt=json')
  .success(function (data, status) {
    console.log("status"+status);
    console.log("data"+data);
    console.log(data);
    feedReader(data, $scope.tArray);
   // $scope.myData = $scope.feedArray1;
  })
  .error(function (data, status) {
    console.log("status"+status);
    console.log("data"+data);
  });


    $scope.gridOptions = { 
      data: 'myData', 
      enableCellSelection: true,
      //columnDefs: $scope.tArray2 
    };
});