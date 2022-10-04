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