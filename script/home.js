function initMap(){var o=document.getElementById("map-container"),e=o.dataset.coordinates,a={latitude:e.split(",")[0].trim(),longitude:e.split(",")[1].trim()},t=new google.maps.LatLng(a.latitude,a.longitude),n=new google.maps.Map(o),i={center:t,zoom:17,mapTypeId:google.maps.MapTypeId.ROADMAP},n=new google.maps.Map(o,i),p=new google.maps.Marker({position:t,map:n,title:"Auksinis Drakonas Tattoo Studio"}),s="<div id='map-marker-content' style='width: 100px; height: 50px;'>Tomos Studija</div>",r=new google.maps.InfoWindow({content:s});google.maps.event.addListener(p,"click",function(){r.open(n,p)})}$(document).ready(function(){initMap();var o=$("#services-carousel");o.owlCarousel({items:4,autoPlay:4500,pagination:!1,navigation:!0,navigationText:["",""],stopOnHover:!0})}),$(window).on("scroll",function(o){this.pageYOffset>0?$(".banner-wrapper .logo-wrapper").addClass("hide-logo"):$(".banner-wrapper .logo-wrapper").removeClass("hide-logo")});