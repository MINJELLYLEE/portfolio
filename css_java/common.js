// 슬라이드 하나씩 덕덕
// const elm = document.querySelectorAll(".section");
// const elmCount = elm.length;

// elm.forEach((item, idx) => {
//   item.addEventListener("mousewheel", function (e) {
//     console.log(e);
//     e.preventDefault();
//     let delta = 0;
//     if (e.wheelDelta) {
//       delta = e.wheelDelta;
//     }

//     let moveTop = window.scrollY;
//     let elmSelector = elm[idx];

//     console.log(moveTop);

//     // 휠을 내렸을 때
//     if (delta < 0) {
//       if (elmSelector !== elmCount - 1) {
//         try {
//           moveTop =
//             window.pageYOffset +
//             elmSelector.nextElementSibling.getBoundingClientRect().top;
//         } catch (e) {}
//       }
//     } else {
//       // 휠을 올렸을 때 +
//       if (elmSelector !== 0) {
//         try {
//           moveTop =
//             window.pageYOffset +
//             elmSelector.previousElementSibling.getBoundingClientRect().top;
//         } catch (e) {}
//       }
//     }
//     window.scrollTo({ top: moveTop });
//   });
// });

// window.addEventListener("scroll", function (e) {
//   const $nav = document.querySelector(".nav");

//   let scrollTop =
//     document.documentElement.scrollTop ||
//     window.scrollY ||
//     this.window.pageYOffset;
//   console.log(scrollTop);
//   let ht = document.querySelector(".section").clientHeight;

//   if (scrollTop > 100) {
//     $nav.classList.add("on");
//   } else {
//     $nav.classList.remove("on");
//   }

//   elm.forEach((item2, i) => {
//     if (scrollTop >= item2.offsetTop - 5) {
//       document.querySelectorAll(".nav li").forEach((li) => {
//         li.classList.remove("on");
//       });
//       document
//         .querySelector(".nav li:nth-child(" + (i + 1) + ")")
//         .classList.add("on");
//     }
//   });
// });

// 슬라이드 한번에 한 섹션씩

window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);

var $html = $("html");

var page = 1;

var lastPage = $(".content").length;

$html.animate({ scrollTop: 0 }, 10);
$(window).on("wheel", function (e) {
  if ($html.is(":animated")) return;

  if (e.originalEvent.deltaY > 0) {
    if (page == lastPage) return;

    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;

    page--;
  }
  var posTop = (page - 1) * $(window).height();

  $html.animate({ scrollTop: posTop }, 100);
});

window.addEventListener("scroll", function (e) {
  const $nav = document.querySelector(".nav");
  const elm = document.querySelectorAll(".section");
  // const elmCount = elm.length;

  let scrollTop =
    document.documentElement.scrollTop ||
    window.scrollY ||
    this.window.pageYOffset;
  console.log(scrollTop);
  let ht = document.querySelector(".section").clientHeight;
  let $move = document.querySelector(".stone");
  let $stone1 = document.querySelector(".stone1");
  let $stone2 = document.querySelector(".stone2");
  let $stone3 = document.querySelector(".stone3");

  if (scrollTop > 100) {
    $nav.classList.add("on");
  } else {
    $nav.classList.remove("on");
  }

  if (scrollTop >= 0 && scrollTop < ht * 1) {
    $move.style.cssText = `top:12vw; left:35vw;   transition: 0.5s;`;
  }
  if (scrollTop >= ht * 1 && scrollTop < ht * 2) {
    $move.style.cssText = `top:calc(80vh - 5vw); left:calc(10vw - 5vw);   transition: 0.5s;`;
  }
  if (scrollTop >= ht * 2 && scrollTop < ht * 3) {
    $move.style.cssText = `top:calc(10vh - 5vw); left:calc(20vw - 5vw);   transition: 0.5s;`;
  }
  if (scrollTop >= ht * 3 && scrollTop < ht * 4) {
    $move.style.cssText = `top:calc(30vh - 5vw); left:calc(80vw - 5vw);   transition: 0.5s;`;
  }

  elm.forEach((item2, i) => {
    if (scrollTop >= item2.offsetTop - 5) {
      document.querySelectorAll(".nav li").forEach((li) => {
        li.classList.remove("on");
      });
      document
        .querySelector(".nav li:nth-child(" + (i + 1) + ")")
        .classList.add("on");
    }
  });
});

// 탭메뉴
$(function () {
  $(".btn>button").click(function () {
    let btn_index = $(this).index();
    console.log(btn_index);
    $(".btn>button, .sec2_con>article").removeClass("on");
    $(this).addClass("on");
    $(".sec2_con>article").eq(btn_index).addClass("on");
  });
});

// swiper
var swiper = new Swiper(".slide1", {
  pagination: {
    el: ".pg1",
  },
  loop: true,
  loopAdditionalSlides: 1,
});
