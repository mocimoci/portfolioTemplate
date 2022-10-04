/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/common.scss":
/*!******************************!*\
  !*** ./src/scss/common.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/loading.js":
/*!***************************!*\
  !*** ./src/js/loading.js ***!
  \***************************/
/***/ (function() {

$(window).on('load',function(){
    $("#splash-logo").delay(500).fadeOut('slow');
    
    $("#splash").delay(500).fadeOut('slow',function(){
        $('body').addClass('appear');
    });
    $('.splashbg').on('animationend', function() {    
    });
        
});

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ (function() {

// モーダルウィンドウを開く
$('.js-modal-open').on('click', function(){
    var target = $(this).data('target');
    var modal = document.getElementById(target);
    scrollPosition = $(window).scrollTop();

    $('body').addClass('fixed').css({'top': -scrollPosition});
    $(modal).addClass('m_slidein')
    return false;
});

// モーダルウィンドウを閉じる
$('.js-modal-close').on('click', function(){
    $('body').removeClass('fixed').css({'top': "0"});
    window.scrollTo( 0 , scrollPosition );
    $('.js-modal').removeClass('m_slidein')
    return false;
});

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/***/ (function() {

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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_common_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/common.scss */ "./src/scss/common.scss");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading */ "./src/js/loading.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loading__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ "./src/js/nav.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modal__WEBPACK_IMPORTED_MODULE_3__);
// SCSS


// js







}();
/******/ })()
;
//# sourceMappingURL=main.js.map