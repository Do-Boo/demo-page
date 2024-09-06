document.addEventListener('DOMContentLoaded', function () {



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
            // console.log('Search');
            searchDrawer.classList.add('open');
            drawerOverlay.style.display = 'block';
        });
    });

    closeSearchButton.addEventListener('click', () => {
        searchDrawer.classList.remove('open');
        drawerOverlay.style.display = 'none';
    });

    // document.addEventListener('click', (e) => {
    //     if (!searchDrawer.contains(e.target) && !e.target.classList.contains('search-icon')) {
    //         searchDrawer.classList.remove('open');
    //     }
    // });



});