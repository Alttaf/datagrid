// app.js
var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope, $http, pollingService, feedReaderService) {
     // INITIALISATION
     //(probably refactor... to simplify into one array and supply as a service allowing for easy config not enough time
     // tArray - this array is used by the feeder service to extract headings from the incoming feed
     $scope.tArray =[ "gsx$ticker", "gsx$industry", "gsx$marketcap",  "gsx$price",  "gsx$change" , "gsx$volume"];    
     // tArray2 - this array is used to configure the columns in the grid, documentation can be found at ng-grid soon to be ui.grid
     $scope.tArray2 =[ {headerCellTemplate:'<div class="ngHeaderSortColumn {{col.headerClass}}" ng-style="{\'cursor\': col.cursor}" ng-class="{ \'ngSorted\': !noSortVisible }"><div ng-click="col.sort($event)" ng-class="{ \'selected\': col.sortDirection }" ng-class="\'colt\' + col.index" class="ngHeaderText">{{col.displayName}}</div><div class="ngSortButtonDown" ng-show="col.showSortButtonDown()"></div><div class="ngSortButtonUp" ng-show="col.showSortButtonUp()"></div><div class="ngSortPriority">{{col.sortPriority}}</div><div ng-class="{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }" ng-click="togglePin(col)" ng-show="col.pinnable"></div></div><div ng-show="col.resizable" class="ngHeaderGrip" ng-click="col.gripClick($event)" ng-mousedown="col.gripOnMouseDown($event)"></div>', headerClass: 'gsx$tickerHead', cellClass:"gsxticker", field:'ticker', displayName:'Ticker', cellTemplate: '<div ng-mouseover="moused(row.getRowIndex(), tArray3, col.field)" ng-mouseleave="mousel(row.getRowIndex(), tArray3, col.field)"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'}, {headerCellTemplate:'<div class="ngHeaderSortColumn {{col.headerClass}}" ng-style="{\'cursor\': col.cursor}" ng-class="{ \'ngSorted\': !noSortVisible }"><div ng-click="col.sort($event)" ng-class="{ \'selected\': col.sortDirection }" ng-class="\'colt\' + col.index" class="ngHeaderText">{{col.displayName}}</div><div class="ngSortButtonDown" ng-show="col.showSortButtonDown()"></div><div class="ngSortButtonUp" ng-show="col.showSortButtonUp()"></div><div class="ngSortPriority">{{col.sortPriority}}</div><div ng-class="{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }" ng-click="togglePin(col)" ng-show="col.pinnable"></div></div><div ng-show="col.resizable" class="ngHeaderGrip" ng-click="col.gripClick($event)" ng-mousedown="col.gripOnMouseDown($event)"></div>', cellClass:"gsx$industry", field:'industry', displayName:'Industry', cellTemplate: '<div ng-mouseover="moused(row.getRowIndex(), tArray3, col.field)" ng-mouseleave="mousel(row.getRowIndex(), tArray3, col.field)"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'}, {headerCellTemplate:'<div class="ngHeaderSortColumn {{col.headerClass}}" ng-style="{\'cursor\': col.cursor}" ng-class="{ \'ngSorted\': !noSortVisible }"><div ng-click="col.sort($event)" ng-class="{ \'selected\': col.sortDirection }" ng-class="\'colt\' + col.index" class="ngHeaderText">{{col.displayName}}</div><div class="ngSortButtonDown" ng-show="col.showSortButtonDown()"></div><div class="ngSortButtonUp" ng-show="col.showSortButtonUp()"></div><div class="ngSortPriority">{{col.sortPriority}}</div><div ng-class="{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }" ng-click="togglePin(col)" ng-show="col.pinnable"></div></div><div ng-show="col.resizable" class="ngHeaderGrip" ng-click="col.gripClick($event)" ng-mousedown="col.gripOnMouseDown($event)"></div>', cellClass:"gsx$marketcap", field:'marketcap', displayName:'Market Cap', cellTemplate: '<div ng-mouseover="moused(row.getRowIndex(), tArray3, col.field)" ng-mouseleave="mousel(row.getRowIndex(), tArray3, col.field)"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'},  {headerCellTemplate:'<div class="ngHeaderSortColumn {{col.headerClass}}" ng-style="{\'cursor\': col.cursor}" ng-class="{ \'ngSorted\': !noSortVisible }"><div ng-click="col.sort($event)" ng-class="{ \'selected\': col.sortDirection }" ng-class="\'colt\' + col.index" class="ngHeaderText">{{col.displayName}}</div><div class="ngSortButtonDown" ng-show="col.showSortButtonDown()"></div><div class="ngSortButtonUp" ng-show="col.showSortButtonUp()"></div><div class="ngSortPriority">{{col.sortPriority}}</div><div ng-class="{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }" ng-click="togglePin(col)" ng-show="col.pinnable"></div></div><div ng-show="col.resizable" class="ngHeaderGrip" ng-click="col.gripClick($event)" ng-mousedown="col.gripOnMouseDown($event)"></div>', cellClass:"gsx$price", field:'price', displayName:'Price', cellTemplate: '<div ng-mouseover="moused(row.getRowIndex(), tArray3, col.field)" ng-mouseleave="mousel(row.getRowIndex(), tArray3, col.field)"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'},  {headerCellTemplate:'<div class="ngHeaderSortColumn {{col.headerClass}}" ng-style="{\'cursor\': col.cursor}" ng-class="{ \'ngSorted\': !noSortVisible }"><div ng-click="col.sort($event)" ng-class="{ \'selected\': col.sortDirection }" ng-class="\'colt\' + col.index" class="ngHeaderText">{{col.displayName}}</div><div class="ngSortButtonDown" ng-show="col.showSortButtonDown()"></div><div class="ngSortButtonUp" ng-show="col.showSortButtonUp()"></div><div class="ngSortPriority">{{col.sortPriority}}</div><div ng-class="{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }" ng-click="togglePin(col)" ng-show="col.pinnable"></div></div><div ng-show="col.resizable" class="ngHeaderGrip" ng-click="col.gripClick($event)" ng-mousedown="col.gripOnMouseDown($event)"></div>', cellClass:"gsx$change",field:'change', displayName:'Change',  cellTemplate: '<div ng-class="((row.getPropertyNumber(col.field))>=0)? \' green\':\' red\'" ng-mouseover="moused(row.getRowIndex(), tArray3, col.field)" ng-mouseleave="mousel(row.getRowIndex(), tArray3, col.field)"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'}, {headerCellTemplate:'<div class="ngHeaderSortColumn {{col.headerClass}}" ng-style="{\'cursor\': col.cursor}" ng-class="{ \'ngSorted\': !noSortVisible }"><div ng-click="col.sort($event)" ng-class="{ \'selected\': col.sortDirection }" ng-class="\'colt\' + col.index" class="ngHeaderText">{{col.displayName}}</div><div class="ngSortButtonDown" ng-show="col.showSortButtonDown()"></div><div class="ngSortButtonUp" ng-show="col.showSortButtonUp()"></div><div class="ngSortPriority">{{col.sortPriority}}</div><div ng-class="{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }" ng-click="togglePin(col)" ng-show="col.pinnable"></div></div><div ng-show="col.resizable" class="ngHeaderGrip" ng-click="col.gripClick($event)" ng-mousedown="col.gripOnMouseDown($event)"></div>', cellClass:"gsx$volume", field:'volume', displayName:'Volume', cellTemplate: '<div ng-mouseover="moused(row.getRowIndex(), tArray3, col.field)" ng-mouseleave="mousel(row.getRowIndex(), tArray3, col.field)"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>' }];
     // tArray3 - this array is used for the mouse enter and leave functions to decipher which column we are currently in
     $scope.tArray3 =[ "ticker", "industry", "marketcap",  "price",  "change" , "volume"];
     $scope.uri ='https://spreadsheets.google.com/feeds/list/1l6OULdMB6wv03z19VyW3S8-OgejwId6Rjl1cZY_eMO8/on8iqg2/public/values?alt=json';
    
    //highlight the given column and row           
    $scope.moused = function(row, tArray, title){
            console.log("tArray = ");
        console.log(tArray);
        console.log(title);
        var colNo = tArray.indexOf(title);
        console.log("col = "+colNo);
        $('.ngCell.col'+colNo+'.colt'+colNo).css({"background-color":"#c9dde1"});
        $scope.gridOptions.selectRow(row, true);
    };
    
    //un highlight the given column and row
    $scope.mousel = function(row, tArray, title){
        console.log("tArray = ");
        console.log(tArray);
        console.log(title);
        var colNo = tArray.indexOf(title);
        console.log("col = "+colNo);
        $('.ngCell.col'+colNo+'.colt'+colNo).css({"background-color":"inherit"});
        $scope.gridOptions.selectRow(row, false);
    };
    // poll for changes in the sheet
   pollingService.startPolling("google", $scope.uri , 10000, 
    function(data){console.log(data, status);
        var dataFeed = data.data;
        console.log(dataFeed);
        $scope.myData = feedReaderService.read(dataFeed, $scope.tArray);
    
    }); 

    // ng-grid options set the array definition here 'tArray2'
    $scope.gridOptions = { 
      data: 'myData', 
      enableCellSelection: false,
      enableRowSelection: true,
      columnDefs: 'tArray2' 
    };
});

app.directive("navbar", function() {
  return {
    templateUrl: 'navTemplate.html'
  };
});

app.directive("searchbar", function() {
  return {
    templateUrl: 'searchTemplate.html'
  };
});
