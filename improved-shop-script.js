// 슬라이더 관련 코드
class Slider {
    constructor(sliderSelector, slidesData) {
        this.slider = document.querySelector(sliderSelector);
        this.slidesContainer = this.slider.querySelector('.slides');
        this.navigationContainer = this.slider.querySelector('.navigation-manual');
        this.slidesData = slidesData;
        this.currentSlide = 0;
        this.intervalId = null;

        this.init();
    }

    init() {
        this.createSlides();
        this.createNavigation();
        this.showSlide(this.currentSlide);
        this.startAutoSlide();
    }

    createSlides() {
        this.slidesData.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.classList.add('slide');
            slideElement.innerHTML = `<img src="${slide.image}" alt="Slide ${index + 1}">`;
            this.slidesContainer.appendChild(slideElement);
        });
    }

    createNavigation() {
        this.slidesData.forEach((_, index) => {
            const button = document.createElement('button');
            button.classList.add('manual-btn');
            button.addEventListener('click', () => this.showSlide(index));
            this.navigationContainer.appendChild(button);
        });
    }

    showSlide(index) {
        this.currentSlide = index;
        this.slidesContainer.style.transform = `translateX(-${index * 100}%)`;
        this.updateNavigation();
    }

    updateNavigation() {
        const buttons = this.navigationContainer.querySelectorAll('.manual-btn');
        buttons.forEach((button, index) => {
            button.classList.toggle('active', index === this.currentSlide);
        });
    }

    startAutoSlide() {
        this.intervalId = setInterval(() => {
            this.currentSlide = (this.currentSlide + 1) % this.slidesData.length;
            this.showSlide(this.currentSlide);
        }, 5000);
    }

    stopAutoSlide() {
        clearInterval(this.intervalId);
    }
}

// 상품 목록 관련 코드
class ProductList {
    constructor(containerSelector, productsData) {
        this.container = document.querySelector(containerSelector);
        this.productsData = productsData;

        this.init();
    }

    init() {
        this.renderProducts();
    }

    renderProducts() {
        this.productsData.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-item');
            productElement.innerHTML = `
                <div class="image-container">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
            `;
            this.container.appendChild(productElement);
        });
    }
}

// 네비게이션 관련 코드
function initNavigation() {
    const header = document.querySelector('.site-header');
    const topNav = header.querySelector('.top-nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 16) {
            topNav.style.display = 'none';
        } else {
            topNav.style.display = 'block';
        }
    });

    const mainNavItems = document.querySelectorAll('.main-nav__item');
    mainNavItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.main-nav__sub__item').style.display = 'block';
        });
        item.addEventListener('mouseleave', () => {
            item.querySelector('.main-nav__sub__item').style.display = 'none';
        });
    });
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    // 슬라이더 초기화
    const slidesData = [
        { image: './main_rolling1.jpg' },
        { image: './main_rolling2.jpg' },
        { image: './main_rolling3.jpg' },
        { image: './main_rolling4.jpg' }
    ];
    new Slider('.slider', slidesData);

    // 상품 목록 초기화
    const productsData = [
        { name: '케이스 1', description: '상품 설명 1', image: './img_item1.jpg' },
        { name: '케이스 2', description: '상품 설명 2', image: './img_item2.jpg' },
        { name: '케이스 3', description: '상품 설명 3', image: './img_item3.jpg' },
        { name: '케이스 4', description: '상품 설명 4', image: './img_item4.jpg' },
        { name: '케이스 5', description: '상품 설명 5', image: './img_item1.jpg' },
        { name: '케이스 6', description: '상품 설명 6', image: './img_item2.jpg' },
        { name: '케이스 7', description: '상품 설명 7', image: './img_item3.jpg' },
        { name: '케이스 8', description: '상품 설명 8', image: './img_item4.jpg' },
        { name: '케이스 9', description: '상품 설명 9', image: './img_item1.jpg' },
        { name: '케이스 10', description: '상품 설명 10', image: './img_item2.jpg' }
    ];
    new ProductList('.product-list', productsData);

    // 네비게이션 초기화
    initNavigation();

    // 개발자 도구 관련 보안 기능
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.onkeydown = (e) => {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
            return false;
        }
    };
});
