$(function(){

  $(".hamburger").on("click", function () {
    $("header").toggleClass("open"); 
  });

  // #maskのエリアをクリックした時にメニューを閉じる
  $("#mask").on("click", function () {
    $("header").removeClass("open");
  });

  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $("section").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });

});