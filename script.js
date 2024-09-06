document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', function () {
        var element = document.querySelector('header'); // 클래스를 추가할 요소 선택
        if (window.scrollY > 50) { // 스크롤 위치가 100px 이상일 때
            element.classList.add('buttom-shadow'); // 클래스 추가
        } else {
            element.classList.remove('buttom-shadow'); // 클래스 제거
        }
    });

    // 슬라이더 기능
    const slider = document.querySelector('.slider-container');
    const slides = slider.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentSlide = 0;
    const slideInterval = 5000; // 5초마다 슬라이드 변경

    function createDots() {
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }

    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
    }

    createDots();
    setInterval(nextSlide, slideInterval);

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // 모바일 메뉴 기능
    const mobileMenuButton = document.querySelector('.mobile-header .mobile-menu-button');
    const mobileDrawer = document.querySelector('.mobile-drawer');
    const closeDrawerButton = document.querySelector('.close-drawer');
    const drawerOverlay = document.querySelector('.drawer-overlay');
    const submenuToggles = document.querySelectorAll('.submenu-toggle');

    function openDrawer() {
        mobileDrawer.classList.add('open');
        drawerOverlay.style.display = 'block';
    }

    function closeDrawer() {
        mobileDrawer.classList.remove('open');
        drawerOverlay.style.display = 'none';
    }

    mobileMenuButton.addEventListener('click', openDrawer);
    closeDrawerButton.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);

    document.addEventListener('contextmenu', (e) => e.preventDefault());

    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const submenu = this.nextElementSibling;
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
                this.textContent = '+';
            } else {
                submenu.style.display = 'block';
                this.textContent = '-';
            }
        });
    });

    const menuSlider = document.querySelector('.mobile-menu-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    menuSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - menuSlider.offsetLeft;
        scrollLeft = menuSlider.scrollLeft;
    });

    menuSlider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    menuSlider.addEventListener('mouseup', () => {
        isDown = false;
    });

    menuSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - menuSlider.offsetLeft;
        const walk = (x - startX) * 2;
        menuSlider.scrollLeft = scrollLeft - walk;
    });

    const searchButtons = document.querySelectorAll('.search-icon');
    const searchDrawer = document.querySelector('.search-drawer');
    const closeSearchButton = document.querySelector('.close-search');

    searchButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            searchDrawer.classList.add('open');
            drawerOverlay.style.display = 'block';
        });
    });

    closeSearchButton.addEventListener('click', () => {
        searchDrawer.classList.remove('open');
        drawerOverlay.style.display = 'none';
    });

    drawerOverlay.addEventListener('click', () => {
        searchDrawer.classList.remove('open');
        drawerOverlay.style.display = 'none';
    });

    // 위시리스트 (찜하기) 기능
    const wishlistButtons = document.querySelectorAll('.wishlist');

    wishlistButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            button.classList.toggle('active');
        });
    });

    // 장바구니 추가 기능 (실제로는 서버와 통신이 필요합니다)
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('장바구니에 추가되었습니다.');
        });
    });

    const productSlider = document.querySelector('.product-slider');
    const productList = productSlider.querySelector('.product-list');
    const bestPrevSlider = document.querySelector('.product-slider-container .prev-slide');
    const bestNextSlider = document.querySelector('.product-slider-container .next-slide');
    const productItems = productList.querySelectorAll('.product-item');
    let currentIndex = 0;


    function updateSlider() {
        const itemWidth = productItems[0].clientWidth;
        productList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    function bestPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }

    function bestNextSlide() {
        if (currentIndex < productItems.length - 4) {
            currentIndex++;
            updateSlider();
        }
    }

    window.addEventListener('resize', updateSlider);

    bestPrevSlider.addEventListener('click', bestPrevSlide);
    bestNextSlider.addEventListener('click', bestNextSlide);

    updateSlider();

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

});