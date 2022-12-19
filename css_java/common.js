// 멘트등장
let num = 1;
document.querySelectorAll("#sec1>h1>p").forEach((el) => {
  // 각 엘리먼트의 animation-delay를 0.5, 1.0, 1.5 ~ 차례로 준다.
  el.style.setProperty("animation-delay", `${num}s`);
  num += 1;
});
let num1 = 4.5;
document.querySelectorAll("#sec1>h1").forEach((el) => {
  // 각 엘리먼트의 animation-delay를 0.5, 1.0, 1.5 ~ 차례로 준다.
  el.style.setProperty("animation-delay", `${num1}s`);
  num1 += 4.5;
});
let num2 = 5;
document.querySelectorAll("#sec1>div").forEach((el) => {
  // 각 엘리먼트의 animation-delay를 0.5, 1.0, 1.5 ~ 차례로 준다.
  el.style.setProperty("animation-delay", `${num2}s`);
  num2 += 5;
});

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
  if (scrollTop >= 0 && scrollTop < ht * 1) {
    $stone1.style.cssText = `opacity:1;   transition: 0.2s;`;
    $stone2.style.cssText = `opacity:1;   transition: 0.2s;`;
    $stone3.style.cssText = `opacity:1;   transition: 0.2s;`;
  }
  if (scrollTop >= ht * 1 && scrollTop < ht * 2) {
    $move.style.cssText = `width:10vw; height:10vw; top:5vw; left:10vw; transition: 0.5s;`;
  }
  if (scrollTop >= ht * 1 && scrollTop < ht * 2) {
    $stone1.style.cssText = `opacity:0; transition: 0.15s;`;
    $stone2.style.cssText = `opacity:1; width:60%; transition: 0.2s;`;
    $stone3.style.cssText = `opacity:0; transition: 0.15s;`;
  }
  if (scrollTop >= ht * 2 && scrollTop < ht * 3) {
    $move.style.cssText = `width:10vw; height:10vw; top:0vw; left:3vw; transition: 0.5s;`;
  }
  if (scrollTop >= ht * 2 && scrollTop < ht * 3) {
    $stone1.style.cssText = `opacity: 1; width:60%; transition: 0.2s;`;
    $stone2.style.cssText = `opacity : 0; transition: 0.15s;`;
    $stone3.style.cssText = `opacity : 0;transition: 0.15s;`;
  }
  if (scrollTop >= ht * 3 && scrollTop < ht * 4) {
    $move.style.cssText = `width:10vw; height:10vw; top:3vw; left:4vw; transition: 0.5s;`;
  }
  if (scrollTop >= ht * 3 && scrollTop < ht * 4) {
    $stone1.style.cssText = `opacity : 0;transition: 0.15s;`;
    $stone2.style.cssText = `opacity : 0;transition: 0.15s;`;
    $stone3.style.cssText = `opacity : 1; transform:rotate(30deg); width:80%;transition: 0.2s; `;
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

// stone css
if (window.matchMedia("(min-width: 600px)").matches) {
  /* 뷰포트 너비가 400 픽셀 이상 */
} else {
  /* 뷰포트 너비가 400 픽셀 미만 */
}
// swiper
var swiper = new Swiper(".slide1", {
  pagination: {
    el: ".pg1",
    clickable: true,
  },
  loop: true,
  loopAdditionalSlides: 1,
});
