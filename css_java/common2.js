$(function () {
  $(".sec3_btn>button").click(function () {
    let btn_index = $(this).index();
    console.log(btn_index);
    $(".sec3_btn>button, .sec3_con>article").removeClass("on");
    $(this).addClass("on");
    // $(".right>article").removeClass("on");
    $(".sec3_con>article").eq(btn_index).addClass("on");
  });
});
