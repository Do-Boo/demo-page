var cookieStt,
    cookieOldTime,
    cookieNewTime = moment().unix(),
    cookieOldTimeGet;


jQuery(window).scroll(function () {
    //상단 고정
    if (jQuery(window).scrollTop() > 124) {
        jQuery("#hdWrap").addClass("fix");
    } else {
        jQuery("#hdWrap").removeClass("fix");
    }
});

jQuery(document).ready(function () {
    var _ = jQuery,
        _headerBanner = _('#headerBanner');

    if (getCookie('hdBanner') != 'close') {
        jQuery('#headerBanner').slideDown();
    }

    if (cookieNewTime > Number(localStorage.getItem('cookieOldTime'))) {
        localStorage.removeItem('cookieOldTime');
        cookieStt = !1;
        setCookie('hdBanner', 'open');
    }

    if (getCookie('hdBanner') == 'close') {
        cookieStt = !0;
        jQuery("#contentWrapper").css("margin-top", "90px");
    }

    if (getCookie('hdBanner') != 'close') {
        cookieStt = !1;
        _headerBanner.slideDown();
    }

    //최상단 배너
    _headerBanner.find('.btnBnClose').on('click', function () {
        _headerBanner.slideUp();
        jQuery("#contentWrapper").css("margin-top", "90px");
        cookieStt = !0;
        cookieOldTime = moment().unix() + 3600;  // 1시간마다 재오픈
        localStorage.setItem('cookieOldTime', cookieOldTime);
        setCookie('hdBanner', 'close', 1);
    });

    //전체메뉴보기
    jQuery(".menuAllBtn").click(function () {
        jQuery(".allMenu").fadeIn();
    });
    jQuery(".closeBtn").click(function () {
        jQuery(".allMenu").fadeOut();
    });

    // 서브메뉴 
    jQuery(".tmenu").live("mouseenter", function () {
        jQuery(this).find(".depth2").slideDown("fast");
    });
    jQuery(".tmenu").live("mouseleave", function () {
        jQuery(this).find(".depth2").slideUp("fast");
    });
    // 검색창 열고/닫기
    jQuery(".searchBtn").click(function () {
        jQuery(".searchArea").fadeIn();
    });
    jQuery(".searchClose").click(function () {
        jQuery(".searchArea").fadeOut();
    });

});

