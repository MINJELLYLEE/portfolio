// tab menu
$(function () {
  $(".sec1_btn>button").click(function () {
    let btn_index1 = $(this).index();
    $(".sec1_btn>button, .sec1_slide>article").removeClass("on");
    $(this).addClass("on");
    $(".sec1_slide>article").eq(btn_index1).addClass("on");
  });
});

$(function () {
  $(".sec2_btn>button").click(function () {
    let btn_index2 = $(this).index();
    $(".sec2_btn>button, .sec2_slide>article").removeClass("on");
    $(this).addClass("on");
    $(".sec2_slide>article").eq(btn_index2).addClass("on");
  });
});

$(function () {
  $(".sec3_btn>button").click(function () {
    let btn_index3 = $(this).index();
    $(".sec3_btn>button, .sec3_slide>article").removeClass("on");
    $(this).addClass("on");
    $(".sec3_slide>article").eq(btn_index3).addClass("on");
  });
});

// mega_menu
$(function () {
  $(".ham>a").on("click", function () {
    $(".fullscreen_menu").fadeIn();
  });
  $(".ham_close>a").on("click", function () {
    $(".fullscreen_menu").fadeOut();
  });
});

// swiper slide

var swiper1 = new Swiper(".slide1_1", {
  navigation: {
    nextEl: ".next1_1",
    prevEl: ".prev1_1",
  },
  pagination: {
    el: ".pg1_1",
    clickable: true,
  },
  loop: true,
  loopAdditionalSlides: 1,
});
var swiper2 = new Swiper(".slide2_1", {
  navigation: {
    nextEl: ".next2_1",
    prevEl: ".prev2_1",
  },
  pagination: {
    el: ".pg2_1",
    clickable: true,
  },
  loop: true,
  loopAdditionalSlides: 1,
});
var swiper3 = new Swiper(".slide3_1", {
  navigation: {
    nextEl: ".next3_1",
    prevEl: ".prev3_1",
  },
  pagination: {
    el: ".pg3_1",
    clickable: true,
  },
  loop: true,
  loopAdditionalSlides: 1,
});

var swiper1 = new Swiper(".slide1_2", {
  navigation: {
    nextEl: ".next1_2",
    prevEl: ".prev1_2",
  },

  loop: true,
  loopAdditionalSlides: 1,
});
var swiper2 = new Swiper(".slide2_2", {
  navigation: {
    nextEl: ".next2_2",
    prevEl: ".prev2_2",
  },

  loop: true,
  loopAdditionalSlides: 1,
});
var swiper3 = new Swiper(".slide3_2", {
  navigation: {
    nextEl: ".next3_2",
    prevEl: ".prev3_2",
  },

  loop: true,
  loopAdditionalSlides: 1,
});
var swiper4 = new Swiper(".slide4_2", {
  navigation: {
    nextEl: ".next4_2",
    prevEl: ".prev4_2",
  },

  loop: true,
  loopAdditionalSlides: 1,
});
var swiper5 = new Swiper(".slide5_2", {
  navigation: {
    nextEl: ".next5_2",
    prevEl: ".prev5_2",
  },

  loop: true,
  loopAdditionalSlides: 1,
});

var swiper1 = new Swiper(".slide1_3", {
  navigation: {
    nextEl: ".next1_3",
    prevEl: ".prev1_3",
  },
  pagination: {
    el: ".pg1_3",
    clickable: true,
  },
  loop: true,
  loopAdditionalSlides: 1,
});
var swiper2 = new Swiper(".slide2_3", {
  navigation: {
    nextEl: ".next2_3",
    prevEl: ".prev2_3",
  },

  loop: true,
  loopAdditionalSlides: 1,
});
var swiper3 = new Swiper(".slide3_3", {
  navigation: {
    nextEl: ".next3_3",
    prevEl: ".prev3_3",
  },

  loop: true,
  loopAdditionalSlides: 1,
});
var swiper4 = new Swiper(".slide4_3", {
  navigation: {
    nextEl: ".next4_3",
    prevEl: ".prev4_3",
  },

  loop: true,
  loopAdditionalSlides: 1,
});

var swiper1 = new Swiper(".slide4", {
  navigation: {
    nextEl: ".next4",
    prevEl: ".prev4",
  },
  pagination: {
    el: ".pg4",
    clickable: true,
  },
  loop: true,
  loopAdditionalSlides: 1,
});
