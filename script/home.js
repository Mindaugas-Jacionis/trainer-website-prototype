'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('imports?jQuery=jquery!owl.carousel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import 'owl.carousel/dist/assets/owl.carousel.css';
(0, _jquery2.default)(document).ready(function () {
  console.log((0, _jquery2.default)('#services-carousel'));
  (0, _jquery2.default)('#services-carousel').owlCarousel({
    itemsCustom: [[0, 2], [450, 4], [600, 7], [700, 9], [1000, 10], [1200, 12], [1400, 13], [1600, 15]],
    navigation: true
  });
});