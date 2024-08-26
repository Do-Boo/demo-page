$(window).scroll(function () {
    // 상단 고정
    if ($(window).scrollTop() > 16) {
        $(".top-nav").hide();
    } else {
        $(".top-nav").show();
        $(window).scrollTop(0);
    }
});
$(document).ready(function () {
    $(".main-nav__item").on("mouseenter", function () {
        $(this).find(".main-nav__sub__item").show();
    }).on("mouseleave", function () {
        $(this).find(".main-nav__sub__item").hide();
    });
});

$(document).ready(function () {
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    function ctrlShiftKey(e, keyCode) {
        return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
    }

    document.onkeydown = (e) => {
        if (e.keyCode === 123 || ctrlShiftKey(e, 'I') || ctrlShiftKey(e, 'J') || (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))) {
            return false;
        }
    };

    (function () {
        const devtools = /./;
        devtools.toString = function () {
            this.opened = true;
        };
        console.log('%c', devtools);
        if (devtools.opened) {
        }
    })();


    let slideIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    function showSlides() {
        slides.each(function (index) {
            $(this).css('display', (index === slideIndex) ? 'block' : 'none');
        });
        $('.manual-btn').removeClass('active');
        $('.manual-btn[data-slide="' + slideIndex + '"]').addClass('active');
    }

    function moveSlide(n) {
        slideIndex = (slideIndex + n + totalSlides) % totalSlides;
        showSlides();
    }

    function autoSlide() {
        moveSlide(1);
        setTimeout(autoSlide, 5000);
    }

    $('.manual-btn').on('click', function () {
        slideIndex = $(this).data('slide');
        showSlides();
    });

    $(window).on('resize', function () {
        showSlides(); // 창 크기 변경 시 슬라이드 위치를 조정
    });

    showSlides();
    setTimeout(autoSlide, 5000);
});

