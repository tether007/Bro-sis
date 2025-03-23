document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Initialize Hero Slider
    const heroSwiper = new Swiper('.hero-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });

    // Initialize Secondary Navigation Carousel
    const secondaryNavSwiper = new Swiper('.secondary-links-carousel', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 6,
            }
        }
    });

    // Top Banner Close
    const topBanner = document.querySelector('.top-banner');
    const closeBanner = document.querySelector('.close-banner');

    if (closeBanner && topBanner) {
        closeBanner.addEventListener('click', () => {
            topBanner.style.display = 'none';
        });
    }

    // Navbar Hide/Show on Scroll
    let lastScroll = 0;
    const mainNav = document.querySelector('.main-nav');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            mainNav.style.transform = 'translateY(-100%)';
        } else {
            mainNav.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });

    // Add active class to current page link
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a, .secondary-links-carousel a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPage.includes(linkPath) && linkPath !== '#') {
            link.classList.add('active');
        }
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});