//import 'owl.carousel/dist/assets/owl.carousel.css';
import $ from 'jquery';
import 'imports?jQuery=jquery!owl.carousel';

$(document).ready(function(){
  console.log($('#services-carousel'))
  $('#services-carousel').owlCarousel({
    itemsCustom : [
        [0, 2],
        [450, 4],
        [600, 7],
        [700, 9],
        [1000, 10],
        [1200, 12],
        [1400, 13],
        [1600, 15]
      ],
      navigation : true
  });
});
