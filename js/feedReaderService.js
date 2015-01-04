angular.module('myApp').factory('feedReaderService', [function () {
      return {
        read : function (data, titlesArray) {
          var feedArray = [];
          var DataLength = data.feed.entry.length;

          for (var i = 0; i < DataLength; i++) {
            //init
            var row = {};
            for (var j = 0; j < titlesArray.length; j++) {
              var title = data.feed.entry[i][titlesArray[j]]['$t'];
              //console.log(title);
              var y = titlesArray[j]
                y = y.split("$").pop();
              var x = {};
              x[y] = title;
              row[y] = title;

            }
            feedArray.push(row);
            // push
          }
          //console.log(feedArray);
          //console.log(feedArray1);
          return feedArray;
        }
      }
    }
  ]);
