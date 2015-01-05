describe('feedReader.Service', function() {
  beforeEach(module('myApp'));
  it('feederReaders.Service returns an array that has been manipulated', inject(function(_feedReaderService_) {
  var feeder = _feedReaderService_;
  var tAarray =[ "gsx$ticker", "gsx$industry", "gsx$marketcap",  "gsx$price",  "gsx$change" , "gsx$volume"];    
  var dataShell = {feed:{entry:dataMock}};
    
 var dataMock = [{
        "id" : {
          "$t" : "https://spreadsheets.google.com/feeds/list/1l6OULdMB6wv03z19VyW3S8-OgejwId6Rjl1cZY_eMO8/on8iqg2/public/values/cokwr"
        },
        "updated" : {
          "$t" : "2015-01-04T17:41:47.132Z"
        },
        "category" : [{
            "scheme" : "http://schemas.google.com/spreadsheets/2006",
            "term" : "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title" : {
          "type" : "text",
          "$t" : "ACIW"
        },
        "content" : {
          "type" : "text",
          "$t" : "industry: Technical \u0026 System Software, marketcap: 1,837.89, price: £47.04, change: 1.80%, volume: 51,718.00"
        },
        "link" : [{
            "rel" : "self",
            "type" : "application/atom+xml",
            "href" : "https://spreadsheets.google.com/feeds/list/1l6OULdMB6wv03z19VyW3S8-OgejwId6Rjl1cZY_eMO8/on8iqg2/public/values/cokwr"
          }
        ],
        "gsx$ticker" : {
          "$t" : "ACIW"
        },
        "gsx$industry" : {
          "$t" : "Technical \u0026 System Software"
        },
        "gsx$marketcap" : {
          "$t" : "1,837.89"
        },
        "gsx$price" : {
          "$t" : "£47.04"
        },
        "gsx$change" : {
          "$t" : "1.80%"
        },
        "gsx$volume" : {
          "$t" : "51,718.00"
        }
      }, {
        "id" : {
          "$t" : "https://spreadsheets.google.com/feeds/list/1l6OULdMB6wv03z19VyW3S8-OgejwId6Rjl1cZY_eMO8/on8iqg2/public/values/cpzh4"
        },
        "updated" : {
          "$t" : "2015-01-04T17:41:47.132Z"
        },
        "category" : [{
            "scheme" : "http://schemas.google.com/spreadsheets/2006",
            "term" : "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title" : {
          "type" : "text",
          "$t" : "ACXM"
        },
        "content" : {
          "type" : "text",
          "$t" : "industry: Information Technology Services, marketcap: 1,754.84, price: £23.95, change: 0.55%, volume: 114,570.00"
        },
        "link" : [{
            "rel" : "self",
            "type" : "application/atom+xml",
            "href" : "https://spreadsheets.google.com/feeds/list/1l6OULdMB6wv03z19VyW3S8-OgejwId6Rjl1cZY_eMO8/on8iqg2/public/values/cpzh4"
          }
        ],
        "gsx$ticker" : {
          "$t" : "ACXM"
        },
        "gsx$industry" : {
          "$t" : "Information Technology Services"
        },
        "gsx$marketcap" : {
          "$t" : "1,754.84"
        },
        "gsx$price" : {
          "$t" : "£23.95"
        },
        "gsx$change" : {
          "$t" : "0.55%"
        },
        "gsx$volume" : {
          "$t" : "114,570.00"
        }
      }, {
        "id" : {
          "$t" : "https://spreadsheets.google.com/feeds/list/1l6OULdMB6wv03z19VyW3S8-OgejwId6Rjl1cZY_eMO8/on8iqg2/public/values/cre1l"
        },
        "updated" : {
          "$t" : "2015-01-04T17:41:47.132Z"
        },
        "category" : [{
            "scheme" : "http://schemas.google.com/spreadsheets/2006",
            "term" : "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title" : {
          "type" : "text",
          "$t" : "ADBE"
        },
        "content" : {
          "type" : "text",
          "$t" : "industry: Application Software, marketcap: 23,170.76, price: £46.61, change: 1.26%, volume: 808,302.00"
        },
        "link" : [{
            "rel" : "self",
            "type" : "application/atom+xml",
            "href" : "https://spreadsheets.google.com/feeds/list/1l6OULdMB6wv03z19VyW3S8-OgejwId6Rjl1cZY_eMO8/on8iqg2/public/values/cre1l"
          }
        ],
        "gsx$ticker" : {
          "$t" : "ADBE"
        },
        "gsx$industry" : {
          "$t" : "Application Software"
        },
        "gsx$marketcap" : {
          "$t" : "23,170.76"
        },
        "gsx$price" : {
          "$t" : "£46.61"
        },
        "gsx$change" : {
          "$t" : "1.26%"
        },
        "gsx$volume" : {
          "$t" : "808,302.00"
        }
      }];
      
  var expectedRes  = [ { ticker : 'ACIW', industry : 'Technical & System Software', marketcap : '1,837.89', price : '£47.04', change : '1.80%', volume : '51,718.00' }, { ticker : 'ACXM', industry : 'Information Technology Services', marketcap : '1,754.84', price : '£23.95', change : '0.55%', volume : '114,570.00' }, { ticker : 'ADBE', industry : 'Application Software', marketcap : '23,170.76', price : '£46.61', change : '1.26%', volume : '808,302.00' } ];
  var dataShell = {feed:{entry:dataMock}};
  var index = feeder.read(dataShell, tAarray);
  //console.log("index="+index);
  expect(index).toEqual(expectedRes);
  }));
  
  
});


describe('polling.Service', function() {
var pollingService, httpBackend;
  beforeEach(module('myApp'));
  beforeEach(inject(function(_pollingService_, $httpBackend) {
    pollingService = _pollingService_;
    httpBackend = $httpBackend;
}));
  
it('NOT WORKING simplePolling.Servic returns an array that has been manipulated',function() {
    var res;
    var uri ="https://spreadsheets.google.com/feeds/list/1l6OULdMB6wv03z19VyW3S8-OgejwId6Rjl1cZY_eMO8/on8iqg2/public/values?alt=json";
    httpBackend.when("GET",uri).respond({data:"ok"});
    //console.log(httpBackend);
    pollingService.startPolling("google", uri , 100, function(){
    console.log("x");   
    });
   
    

});
});


