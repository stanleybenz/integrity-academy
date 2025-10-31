// Main site-wide scripts placeholder
// Navigation toggles and carousel initialization will be added in subsequent tasks

(function () {
    // Mobile menu toggle
    var btn = document.getElementById('mobileMenuBtn');
    var menu = document.getElementById('mobileMenu');
    if (btn && menu) {
        btn.addEventListener('click', function () {
            var expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!expanded));
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        });
    }

    // Initialize Swiper carousel
    function initHeroSlider() {
        // Wait for Swiper to be available
        if (typeof Swiper !== 'undefined') {
            try {
                var heroSwiper = new Swiper('.hero-swiper', {
                    // Basic settings
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    centeredSlides: true,
                    watchSlidesProgress: true,
                    watchSlidesVisibility: true,
                    
                    // Autoplay - Auto-slide every 5 seconds
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                        stopOnLastSlide: false,
                        reverseDirection: false,
                        waitForTransition: true
                    },
                    
                    // Smooth transition speed
                    speed: 1000,
                    freeMode: false,
                    
                    // Navigation arrows
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        hideOnClick: false
                    },
                    
                    // Pagination dots
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        dynamicBullets: false,
                        type: 'bullets',
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '"></span>';
                        }
                    },
                    
                    // Enhanced touch/swipe with smooth momentum
                    touchEventsTarget: 'container',
                    simulateTouch: true,
                    allowTouchMove: true,
                    grabCursor: true,
                    touchRatio: 1,
                    touchAngle: 45,
                    threshold: 10,
                    longSwipes: true,
                    longSwipesRatio: 0.5,
                    longSwipesMs: 300,
                    followFinger: true,
                    
                    // Smooth fade effect for transitions
                    effect: 'fade',
                    fadeEffect: {
                        crossFade: true
                    },
                    
                    // Performance optimizations
                    lazy: {
                        loadPrevNext: true,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: false
                    },
                    
                    // Preload images
                    preloadImages: true,
                    updateOnWindowResize: true,
                    observer: true,
                    observeParents: true,
                    
                    // Keyboard control
                    keyboard: {
                        enabled: true,
                        onlyInViewport: true
                    },
                    
                    // Smooth transitions callbacks with caption animations
                    on: {
                        init: function() {
                            this.el.classList.add('swiper-initialized');
                            // Show caption for initial slide
                            var activeSlide = this.slides[this.activeIndex];
                            if (activeSlide) {
                                var caption = activeSlide.querySelector('.slide-caption');
                                if (caption) {
                                    setTimeout(function() {
                                        caption.style.opacity = '1';
                                        caption.style.transform = 'translateY(0)';
                                    }, 100);
                                }
                            }
                        },
                        slideChangeTransitionStart: function() {
                            // Hide all captions
                            this.slides.forEach(function(slide) {
                                var caption = slide.querySelector('.slide-caption');
                                if (caption) {
                                    caption.style.opacity = '0';
                                    caption.style.transform = 'translateY(20px)';
                                }
                                slide.classList.add('transitioning');
                            });
                        },
                        slideChangeTransitionEnd: function() {
                            // Show caption for active slide
                            var activeSlide = this.slides[this.activeIndex];
                            if (activeSlide) {
                                var caption = activeSlide.querySelector('.slide-caption');
                                if (caption) {
                                    setTimeout(function() {
                                        caption.style.opacity = '1';
                                        caption.style.transform = 'translateY(0)';
                                    }, 200);
                                }
                            }
                            // Remove transitioning class
                            this.slides.forEach(function(slide) {
                                slide.classList.remove('transitioning');
                            });
                        }
                    },
                    
                    // A11y
                    a11y: {
                        prevSlideMessage: 'Previous slide',
                        nextSlideMessage: 'Next slide',
                        paginationBulletMessage: 'Go to slide {{index}}'
                    }
                });
                
                console.log('Swiper slider initialized successfully');
                
                // Ensure autoplay starts
                if (heroSwiper.autoplay) {
                    heroSwiper.autoplay.start();
                }
                
                return heroSwiper;
            } catch (error) {
                console.error('Swiper initialization error:', error);
                return null;
            }
        } else {
            // Retry if Swiper not loaded yet
            var attempts = arguments[0] || 0;
            if (attempts < 20) {
                setTimeout(function() {
                    initHeroSlider(attempts + 1);
                }, 100);
            } else {
                console.error('Swiper library failed to load');
            }
            return null;
        }
    }
    
    // Initialize slider when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(initHeroSlider, 100);
        });
    } else {
        // DOM already loaded
        setTimeout(initHeroSlider, 100);
    }
})();

// Contact form handler
(function() {
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var subject = document.getElementById('subject').value || 'Contact Inquiry';
            var message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Create mailto link with formatted message
            var mailtoBody = 'Name: ' + encodeURIComponent(name) + '%0A' +
                           'Email: ' + encodeURIComponent(email) + '%0A%0A' +
                           'Message:%0A' + encodeURIComponent(message);
            
            var mailtoLink = 'mailto:info@example.com?subject=' + encodeURIComponent(subject) + '&body=' + mailtoBody;
            
            // Open mail client
            window.location.href = mailtoLink;
            
            // Show confirmation
            setTimeout(function() {
                alert('Your email client should open. If it doesn\'t, please email us directly at info@example.com');
                contactForm.reset();
            }, 100);
        });
    }
})();

// Page Loader - Hide when page is fully loaded
(function() {
    function hideLoader() {
        var loader = document.getElementById('page-loader');
        if (loader) {
            // Ensure minimum display time for smooth UX (500ms)
            setTimeout(function() {
                loader.classList.add('hidden');
                // Remove from DOM after animation
                setTimeout(function() {
                    if (loader.parentNode) {
                        loader.parentNode.removeChild(loader);
                    }
                }, 500);
            }, 500);
        }
    }

    // Hide loader when DOM is ready and images are loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // Wait for images to load
            if (document.images.length > 0) {
                var imagesLoaded = 0;
                var totalImages = document.images.length;
                
                Array.from(document.images).forEach(function(img) {
                    if (img.complete) {
                        imagesLoaded++;
                    } else {
                        img.addEventListener('load', function() {
                            imagesLoaded++;
                            if (imagesLoaded === totalImages) {
                                hideLoader();
                            }
                        });
                        img.addEventListener('error', function() {
                            imagesLoaded++;
                            if (imagesLoaded === totalImages) {
                                hideLoader();
                            }
                        });
                    }
                });
                
                // Fallback: hide after max 3 seconds even if images aren't loaded
                setTimeout(hideLoader, 3000);
                
                if (imagesLoaded === totalImages) {
                    hideLoader();
                }
            } else {
                hideLoader();
            }
        });
    } else {
        // DOM already loaded
        hideLoader();
    }
    
    // Additional fallback - hide loader after window load
    window.addEventListener('load', function() {
        setTimeout(hideLoader, 300);
    });
})();

// Skeleton Loading - Remove skeleton classes when images load
(function() {
    function removeSkeletons() {
        var skeletons = document.querySelectorAll('.skeleton');
        skeletons.forEach(function(skeleton) {
            // Check if it's an image that has loaded
            if (skeleton.tagName === 'IMG' && skeleton.complete) {
                skeleton.classList.remove('skeleton');
            } else if (skeleton.tagName !== 'IMG') {
                // For non-image skeletons, remove after short delay
                setTimeout(function() {
                    skeleton.classList.remove('skeleton');
                }, 300);
            }
        });
    }
    
    // Remove skeletons when images load
    document.addEventListener('DOMContentLoaded', function() {
        var skeletonImages = document.querySelectorAll('img.skeleton');
        if (skeletonImages.length > 0) {
            skeletonImages.forEach(function(img) {
                if (img.complete) {
                    img.classList.remove('skeleton');
                } else {
                    img.addEventListener('load', function() {
                        this.classList.remove('skeleton');
                    });
                    img.addEventListener('error', function() {
                        this.classList.remove('skeleton');
                    });
                }
            });
        }
        
        // Fallback: remove all skeletons after content loads
        setTimeout(removeSkeletons, 500);
    });
})();

// Newsletter form handler
(function() {
    var newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var email = this.querySelector('input[type="email"]').value;
            
            // Open mailto with subscription request
            var mailtoLink = 'mailto:info@example.com?subject=Newsletter%20Subscription&body=Please%20subscribe%20me%20to%20the%20newsletter:%20' + encodeURIComponent(email);
            window.location.href = mailtoLink;
            
            // Show confirmation
            setTimeout(function() {
                alert('Thank you for subscribing! We will add you to our mailing list.');
                newsletterForm.reset();
            }, 100);
        });
    }
})();

// Floating Header - Add shadow on scroll
(function() {
    var header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
})();

// Scroll Animations using Intersection Observer
(function() {
    // Check if user prefers reduced motion
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // Skip animations for users who prefer reduced motion
        return;
    }
    
    // Intersection Observer options
    var observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px', // Trigger when element is 50px from bottom of viewport
        threshold: 0.1 // Trigger when 10% of element is visible
    };
    
    // Create observer
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Optional: Stop observing after animation triggers
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with animation classes
    function initScrollAnimations() {
        var animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in, .scale-in');
        animatedElements.forEach(function(element) {
            observer.observe(element);
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollAnimations);
    } else {
        initScrollAnimations();
    }
})();

