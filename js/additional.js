$(function(){
  var locations = [];
  function TopPotStore(footTrafficCeiling, footTrafficFloor, percentEnter, averagePurchase, storeName, storeHours) {
    this.footTrafficCeiling = footTrafficCeiling;
    this.footTrafficFloor   = footTrafficFloor;
    this.percentEnter       = percentEnter;
    this.averagePurchase    = averagePurchase;
    this.hourlySales        = 0;
    this.dailySales         = 0;
    this.hour               = 0;
    this.storeName          = storeName;
    this.storeHours         = storeHours;

    this.hourly = function(){
      this.hourlySales = Math.round((Math.random()*(this.footTrafficCeiling -
        this.footTrafficFloor) + this.footTrafficFloor) * this.percentEnter *
        this.averagePurchase);
      this.hour += 1;
      this.dailySales += this.hourlySales;
    }

    this.dailyReport = function(){
      for(i = 1; i <= this.storeHours; i++){
        this.hourly();
      }

      $("#storeResults").append ("<br /><br />"  + "<li>" + this.storeName + " sold " +
        this.dailySales + " donuts for the entire day." + "</li>");
    }

  };

  $("#addStore").on("click", function() {
    var $maxFoot              = $("#maxFootTraffic").val(),
        $minFoot              = $("#minFootTraffic").val(),
        $percentEnter         = $("#percentOfPeopleEntered").val()/100,
        $averageDonutsBought  = $("#averageNumberDonutsBought").val(),
        $newStoreName         = $("#nameOfStore").val(),
        $openHours            = $("#hoursOpen").val();

    var store = (new TopPotStore(
      $maxFoot,
      $minFoot,
      $percentEnter,
      $averageDonutsBought,
      $newStoreName,
      $openHours
    ));

    locations.push(store);

    $("#storeList").append("<li>" + $newStoreName + "</li>");
  });

  $("#getResults").on("click", function(){
    for (storeName in locations) {
      locations[storeName].dailyReport();
    }
  });
});

// the this.hourly function runs once for every hour in this.hour

// the this.dailyReport runs one time for every hour open for each store entered.

// the get results button runs the function one time for every store location.

// For the number of locations input by the user (n), this.dailyReport runs this.hourly one time for every hour the use inputs (m). So the total number of steps is n*m
