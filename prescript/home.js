$( document ).ready(function() {
  initMap();
  var owl = $("#services-carousel");
  owl.owlCarousel({
    items : 4,
    autoPlay: 4500,
    pagination: false,
    navigation : true,
    navigationText : ["",""],
    stopOnHover : true
  });
});

function initMap(){
    var mapCanvas = document.getElementById("map-container");
    var mapCoordinates = mapCanvas.dataset.coordinates;
    var mycoordinatesObject = {
        "latitude" : mapCoordinates.split(",")[0].trim(),
        "longitude" : mapCoordinates.split(",")[1].trim()
    };

    var myLitLang = new google.maps.LatLng( mycoordinatesObject.latitude, mycoordinatesObject.longitude);
    var map = new google.maps.Map(mapCanvas);
    var mapOptions = {
        center: myLitLang,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        position: myLitLang,
        map: map,
        title: 'Auksinis Drakonas Tattoo Studio'
    });

    var contentString = "<div id='map-marker-content' style='width: 100px; height: 50px;'>Tomos Studija</div>";

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

$(window).on('scroll', function(ev){
  this.pageYOffset > 0 ?
    $('.banner-wrapper .logo-wrapper').addClass('hide-logo'):
    $('.banner-wrapper .logo-wrapper').removeClass('hide-logo');
});
