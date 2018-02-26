  
      function initialize() {
        var mapCanvas1 = document.getElementById('map1');
        var mapCanvas2 = document.getElementById('map2');
        var mapOptions = {
          center: new google.maps.LatLng(59.310923, 18.030249),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map1 = new google.maps.Map(mapCanvas1, mapOptions)
        var map2 = new google.maps.Map(mapCanvas2, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);
 