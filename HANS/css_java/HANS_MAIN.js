// mega menu
$(function () {
  $(".ham>a").on("click", function () {
    $(".fullscreen_menu").fadeIn();
  });
  $(".ham_close>a").on("click", function () {
    $(".fullscreen_menu").fadeOut();
  });
});

// swiper slide

var swiper = new Swiper(".slide1", {
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  pagination: {
    el: ".pg1",
  },
  loop: true,
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".slide2", {
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
  pagination: {
    el: ".pg2",
  },
  loop: true,
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// go top button
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 650) {
      $(".floating").fadeIn();
      $(".floating").css($(".sec2").offset().left);
    } else {
      $(".floating").fadeOut();
    }
  });
});
