// Slick Slider
$(function(){
  $(".recommended-products-items").slick({
  slidesToShow: 3,
  dots: false,
  arrows: false,
  slidesToScroll: 2
});
$(".best-products-items").slick({
  slidesToShow: 3,
  dots: false,
  arrows: false,
  slidesToScroll: 2
});
$('.category-products-list').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  centerMode: false,
  variableWidth: true
});
});