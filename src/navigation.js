import $ from "jquery";

$(".openbtn").click(function () {
  $(this).toggleClass("active");
  $("#g-nav").toggleClass("panelactive");
});
/** ボタンが押されたら*/
/**ボタン自身にactiveクラスを付与し */
/**ナビゲーションにpanelactiveクラスを付与 */

$("#g-nav a").click(function () {
  $(".onenbtn").removeClass("actvive");
  $("#g-nav").removeClass("panelactive");
});
/**ナビゲーションボタンのリンクがクリックされたら */
/**ボタン自身のactiveクラスを除去し */
/**ナビゲーションのpanelactiveクラスも除去 */
