// -----------------------------------------------------
// navigation
// -----------------------------------------------------

// =================
// nav
// =================
//基準点の準備
var elemTop = [];

//現在地を取得するための設定を関数でまとめる
function PositionCheck(){
  var headerH = $("#header").outerHeight(true);
  $(".scroll-point").each(function(i) {
    elemTop[i] =Math.round(parseInt($(this).offset().top-headerH));
  });
}

//ナビゲーションに現在地のクラスをつけるための設定
function ScrollAnime() {
  var scroll = Math.round($(window).scrollTop());
  var NavElem = $("#g-nav li");
  var hero = $("#hero").outerHeight(true);
  $("#g-nav li").removeClass('current');
  if(scroll >= (hero - 100) && scroll < elemTop[1]) {
      $(NavElem[0]).addClass('current');
      $("nav").addClass('navbg');
      $("#header").addClass('headernone');
    }
    else if(scroll >= elemTop[1] && scroll < elemTop[2]) {
     $(NavElem[1]).addClass('current');
     $("nav").addClass('navbg');
     $("#header").addClass('headernone');
    } 
    else if(scroll >= elemTop[2] && scroll < elemTop[3]) {
     $(NavElem[2]).addClass('current');
     $("nav").addClass('navbg');
     $("#header").addClass('headernone');
    } 
    else if(scroll >= elemTop[3]) {
     $(NavElem[3]).addClass('current');
     $("nav").addClass('navbg');
     $("#header").addClass('headernone');
    }else {
      $("nav").removeClass('navbg');
      $("#header").removeClass('headernone');
    }
}

//ナビゲーションをクリックした際のスムーススクロール
$('#g-nav span').click(function () {
  var elmHash = $(this).attr('href'); 
  var headerH = $("#header").outerHeight(true);
  var pos = Math.round($(elmHash).offset().top-headerH);  
  $('body,html').animate({scrollTop: pos}, 500);
  return false;
});

// =================
// navハンバーガー
// =================
$(".openbtn").click(function () {
  $(this).toggleClass('active');
});


// =================
// to-top
// =================
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {

  var scroll = $(window).scrollTop(); 
  if (scroll >= 200){
    $('#page-top').removeClass('DownMove'); 
    $('#page-top').addClass('UpMove');
  }else{
    if($('#page-top').hasClass('UpMove')){
      $('#page-top').removeClass('UpMove'); 
      $('#page-top').addClass('DownMove'); 
    }
  }
  
  var wH = window.innerHeight; 
  var footerPos =  $('#footer').offset().top; 
  if(scroll+wH >= (footerPos+10)) {
    var pos = (scroll+wH) - footerPos+10 
    $('#page-top').css('bottom',pos); 
  }else{
    if($('#page-top').hasClass('UpMove')){
      $('#page-top').css('bottom','10px');
    }
  }
}


// =================
// スムーススクロール
// =================
$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 1000;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


// =================
// img ディレイなし
// =================
function noDelayScrollAnime() {
  $('.noDelayScroll').each(function () {
    var elemPos = $(this).offset().top-50;//要素の位置まで来たら
    var scroll = $(window).scrollTop();//スクロール値を取得
    var windowHeight = $(window).height();//画面の高さを取得

    if (scroll >= elemPos - windowHeight) {//指定領域内にスクロールが入ったら
      $(this).addClass("fadeUp");//アニメーションのクラス名を追加
    }else {
      $(this).removeClass("fadeUp");//アニメーションのクラス名を削除
    }
  })
}



// =================
// img ディレイ
// =================
function delayScrollAnime() {
  var time = 0.1;//遅延時間を増やす秒数の値
  var value = time;
  $('.delayScroll').each(function () {
    var parent = this;          //親要素を取得
    var elemPos = $(this).offset().top;//要素の位置まで来たら
    var scroll = $(window).scrollTop();//スクロール値を取得
    var windowHeight = $(window).height();//画面の高さを取得
    var childs = $(this).children();  //子要素を取得
    
    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
      $(childs).each(function () {
        
        if (!$(this).hasClass("fadeUpDelay")) {//アニメーションのクラス名が指定されているかどうかをチェック
          
          $(parent).addClass("play"); //親要素にクラス名playを追加
          $(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
          $(this).addClass("fadeUpDelay");//アニメーションのクラス名を追加
          value = value + time;//delay時間を増加させる

        }
      })
    }
  })
}



// =================
// 横から黒幕
// =================
function backDropScrollAnime() {
  $('.backDrop').each(function () {
    var elemPos = $(this).offset().top-50;//要素の位置まで来たら
    var scroll = $(window).scrollTop();//スクロール値を取得
    var windowHeight = $(window).height();//画面の高さを取得

    if (scroll >= elemPos - windowHeight) {//指定領域内にスクロールが入ったら
      $(this).addClass("bgRLextend");//アニメーションのクラス名を追加
    }
  })
}

// =================
// event
// =================
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PositionCheck();
  ScrollAnime();
  PageTopAnime();
  noDelayScrollAnime();
  backDropScrollAnime() 
  delayScrollAnime();
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PositionCheck();
  ScrollAnime();
  PageTopAnime();
  noDelayScrollAnime();
  backDropScrollAnime();
  delayScrollAnime();

});

$(window).resize(function() {
//リサイズされたときの処理
  PositionCheck()
});  

// #page-topをクリックした際の設定
$('#page-top').click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 500);
  return false;
});


