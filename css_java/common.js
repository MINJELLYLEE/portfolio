$(function () {
  $(".btn>button").click(function () {
    let btn_index = $(this).index();
    console.log(btn_index);
    $(".btn>button, .sec2_con>article").removeClass("on");
    $(this).addClass("on");
    $(".sec2_con>article").eq(btn_index).addClass("on");
  });
});

var swiper = new Swiper(".slide1", {
  pagination: {
    el: ".pg1",
  },
  loop: true,
  loopAdditionalSlides: 1,
});
