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
                //console.log(title);
                var y = titlesArray[j]
                y = y.split("$").pop();
                var x ={};
                x[y] = title;
                row.push(x);
                row1[y] = title;
               // console.log(x);
                
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
    $scope.moused = function(row, tArray, title){
            console.log("tArray = ");
        console.log(tArray);
        console.log(title);
        var colNo = tArray.indexOf(title);
        console.log("col = "+colNo);
        $('.ngCell.col'+colNo+'.colt'+colNo).css({"background-color":"#c9dde1"});
        $scope.gridOptions.selectRow(row, true);
    };
    
    $scope.mousel = function(row, tArray, title){
        console.log("tArray = ");
        console.log(tArray);
        console.log(title);
        var colNo = tArray.indexOf(title);
        console.log("col = "+colNo);
        $('.ngCell.col'+colNo+'.colt'+colNo).css({"background-color":"inherit"});
        $scope.gridOptions.selectRow(row, false);
    };
    
    
     $scope.tArray =[ "gsx$ticker", "gsx$industry", "gsx$marketcap",  "gsx$price",  "gsx$change" , "gsx$volume"];    
     $scope.tArray3 =[ "ticker", "industry", "marketcap",  "price",  "change" , "volume"];    
     
     $scope.tArray2 =[ {headerCellTemplate:'<div class="ngHeaderSortColumn {{col.headerClass}}" ng-style="{\'cursor\': col.cursor}" ng-class="{ \'ngSorted\': !noSortVisible }"><div ng-click="col.sort($event)" ng-class="{ \'selected\': col.sortDirection }" ng-class="\'colt\' + col.index" class="ngHeaderText">{{col.displayName}}</div><div class="ngSortButtonDown" ng-show="col.showSortButtonDown()"></div><div class="ngSortButtonUp" ng-show="col.showSortButtonUp()"></div><div class="ngSortPriority">{{col.sortPriority}}</div><div ng-class="{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }" ng-click="togglePin(col)" ng-show="col.pinnable"></div></div><div ng-show="col.resizable" class="ngHeaderGrip" ng-click="col.gripClick($event)" ng-mousedown="col.gripOnMouseDown($event)"></div>', headerClass: 'gsx$tickerHead', cellClass:"gsxticker", field:'ticker', displayName:'Ticker', cellTemplate: '<div ng-mouseover="moused(row.getRowIndex(), tArray3, col.field)" ng-mouseleave="mousel(row.getRowIndex(), tArray3, col.field)"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'}, {headerCellTemplate:'<div class="ngHeaderSortColumn {{col.headerClass}}" ng-style="{\'cursor\': col.cursor}" ng-class="{ \'ngSorted\': !noSortVisible }"><div ng-click="col.sort($event)" ng-class="{ \'selected\': col.sortDirection }" ng-class="\'colt\' + col.index" class="ngHeaderText">{{col.displayName}}</div><div class="ngSortButtonDown" ng-show="col.showSortButtonDown()"></div><div class="ngSortButtonUp" ng-show="col.showSortButtonUp()"></div><div class="ngSortPriority">{{col.sortPriority}}</div><div ng-class="{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }" ng-click="togglePin(col)" ng-show="col.pinnable"></div></div><div ng-show="col.resizable" class="ngHeaderGrip" ng-click="col.gripClick($event)" ng-mousedown="col.gripOnMouseDown($event)"></div>', cellClass:"gsx$industry", field:'industry', displayName:'Industry', cellTemplate: '<div ng-mouseover="moused(row.getRowIndex(), tArray3, col.field)" ng-mouseleave="mousel(row.getRowIndex(), tArray3, col.field)"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'}, {headerCellTemplate:'<div class="ngHeaderSortColumn {{col.headerClass}}" ng-style="{\'cursor\': col.cursor}" ng-class="{ \'ngSorted\': !noSortVisible }"><div ng-click="col.sort($event)" ng-class="{ \'selected\': col.sortDirection }" ng-class="\'colt\' + col.index" class="ngHeaderText">{{col.displayName}}</div><div class="ngSortButtonDown" ng-show="col.showSortButtonDown()"></div><div class="ngSortButtonUp" ng-show="col.showSortButtonUp()"></div><div class="ngSortPriority">{{col.sortPriority}}</div><div ng-class="{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }" ng-click="togglePin(col)" ng-show="col.pinnable"></div></div><div ng-show="col.resizable" class="ngHeaderGrip" ng-click="col.gripClick($event)" ng-mousedown="col.gripOnMouseDown($event)"></div>', cellClass:"gsx$marketcap", field:'marketcap', displayName:'Market Cap', cellTemplate: '<div ng-mouseover="moused(row.getRowIndex(), tArray3, col.field)" ng-mouseleave="mousel(row.getRowIndex(), tArray3, col.field)"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'},  {headerCellTemplate:'<div class="ngHeaderSortColumn {{col.headerClass}}" ng-style="{\'cursor\': col.cursor}" ng-class="{ \'ngSorted\': !noSortVisible }"><div ng-click="col.sort($event)" ng-class="{ \'selected\': col.sortDirection }" ng-class="\'colt\' + col.index" class="ngHeaderText">{{col.displayName}}</div><div class="ngSortButtonDown" ng-show="col.showSortButtonDown()"></div><div class="ngSortButtonUp" ng-show="col.showSortButtonUp()"></div><div class="ngSortPriority">{{col.sortPriority}}</div><div ng-class="{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }" ng-click="togglePin(col)" ng-show="col.pinnable"></div></div><div ng-show="col.resizable" class="ngHeaderGrip" ng-click="col.gripClick($event)" ng-mousedown="col.gripOnMouseDown($event)"></div>', cellClass:"gsx$price", field:'price', displayName:'Price', cellTemplate: '<div ng-mouseover="moused(row.getRowIndex(), tArray3, col.field)" ng-mouseleave="mousel(row.getRowIndex(), tArray3, col.field)"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'},  {headerCellTemplate:'<div class="ngHeaderSortColumn {{col.headerClass}}" ng-style="{\'cursor\': col.cursor}" ng-class="{ \'ngSorted\': !noSortVisible }"><div ng-click="col.sort($event)" ng-class="{ \'selected\': col.sortDirection }" ng-class="\'colt\' + col.index" class="ngHeaderText">{{col.displayName}}</div><div class="ngSortButtonDown" ng-show="col.showSortButtonDown()"></div><div class="ngSortButtonUp" ng-show="col.showSortButtonUp()"></div><div class="ngSortPriority">{{col.sortPriority}}</div><div ng-class="{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }" ng-click="togglePin(col)" ng-show="col.pinnable"></div></div><div ng-show="col.resizable" class="ngHeaderGrip" ng-click="col.gripClick($event)" ng-mousedown="col.gripOnMouseDown($event)"></div>', cellClass:"gsx$change",field:'change', displayName:'Change',  cellTemplate: '<div ng-class="((row.getPropertyNumber(col.field))>=0)? \' green\':\' red\'" ng-mouseover="moused(row.getRowIndex(), tArray3, col.field)" ng-mouseleave="mousel(row.getRowIndex(), tArray3, col.field)"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'}, {headerCellTemplate:'<div class="ngHeaderSortColumn {{col.headerClass}}" ng-style="{\'cursor\': col.cursor}" ng-class="{ \'ngSorted\': !noSortVisible }"><div ng-click="col.sort($event)" ng-class="{ \'selected\': col.sortDirection }" ng-class="\'colt\' + col.index" class="ngHeaderText">{{col.displayName}}</div><div class="ngSortButtonDown" ng-show="col.showSortButtonDown()"></div><div class="ngSortButtonUp" ng-show="col.showSortButtonUp()"></div><div class="ngSortPriority">{{col.sortPriority}}</div><div ng-class="{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }" ng-click="togglePin(col)" ng-show="col.pinnable"></div></div><div ng-show="col.resizable" class="ngHeaderGrip" ng-click="col.gripClick($event)" ng-mousedown="col.gripOnMouseDown($event)"></div>', cellClass:"gsx$volume", field:'volume', displayName:'Volume', cellTemplate: '<div ng-mouseover="moused(row.getRowIndex(), tArray3, col.field)" ng-mouseleave="mousel(row.getRowIndex(), tArray3, col.field)"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>' }];

   $http.get('https://spreadsheets.google.com/feeds/list/1l6OULdMB6wv03z19VyW3S8-OgejwId6Rjl1cZY_eMO8/on8iqg2/public/values?alt=json')
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
      enableRowSelection: true,
      columnDefs: 'tArray2' 
    };
});
