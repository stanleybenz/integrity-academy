// Mobile Menu Toggle
(function() {
    var mobileMenuButton = document.getElementById('mobileMenuBtn');
    var mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            var isHidden = mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            
            // Update aria-expanded attribute for accessibility
            mobileMenuButton.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
        });
    } else {
        console.warn('Mobile menu button or menu not found:', {
            button: !!mobileMenuButton,
            menu: !!mobileMenu
        });
    }
})();

// Hero Slider Initialization with Swiper.js
(function() {
    function initHeroSlider() {
        var heroSwiper = document.querySelector('.hero-swiper');
        if (!heroSwiper) return;
        
        // Check if Swiper is loaded
        if (typeof Swiper === 'undefined') {
            console.error('Swiper.js library not loaded');
            return;
        }
        
        try {
            var swiper = new Swiper('.hero-swiper', {
                // Basic settings
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                speed: 1000,
                
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                
                // Pagination dots
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
                
                // Touch and keyboard
                keyboard: {
                    enabled: true,
                },
                
                // Accessibility
                a11y: {
                    enabled: true,
                    prevSlideMessage: 'Previous slide',
                    nextSlideMessage: 'Next slide',
                    firstSlideMessage: 'This is the first slide',
                    lastSlideMessage: 'This is the last slide',
                },
                
                // Callbacks
                on: {
                    init: function() {
                        // Animate first slide caption
                        var firstSlide = this.slides[0];
                        if (firstSlide) {
                            var caption = firstSlide.querySelector('.slide-caption');
                            if (caption) {
                                setTimeout(function() {
                                    caption.style.opacity = '1';
                                    caption.style.transform = 'translateY(0)';
                                }, 300);
                            }
                        }
                    },
                    slideChangeTransitionStart: function() {
                        // Hide all captions first
                        var slides = this.slides;
                        for (var i = 0; i < slides.length; i++) {
                            var caption = slides[i].querySelector('.slide-caption');
                            if (caption) {
                                caption.style.opacity = '0';
                                caption.style.transform = 'translateY(20px)';
                            }
                        }
                    },
                    slideChangeTransitionEnd: function() {
                        // Show active slide caption
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
                    }
                }
            });
        } catch (error) {
            console.error('Error initializing Swiper:', error);
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // Wait a bit for Swiper to load if using defer
            setTimeout(initHeroSlider, 100);
        });
    } else {
        setTimeout(initHeroSlider, 100);
    }
    
    // Also try on window load as fallback
    window.addEventListener('load', function() {
        setTimeout(initHeroSlider, 200);
    });
})();

// Modal Handler
(function() {
    var modal = document.getElementById('formModal');
    var modalCloseBtn = document.getElementById('modalCloseBtn');
    var modalIcon = document.getElementById('modalIcon');
    var modalTitle = document.getElementById('modalTitle');
    var modalMessage = document.getElementById('modalMessage');
    
    function showModal(title, message, isSuccess) {
        if (!modal || !modalTitle || !modalMessage || !modalIcon) return;
        
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        
        // Set icon and colors based on success/error
        if (isSuccess) {
            modalIcon.className = 'mx-auto flex items-center justify-center h-16 w-16 rounded-full mb-4 bg-green-100';
            modalIcon.innerHTML = '<svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
        } else {
            modalIcon.className = 'mx-auto flex items-center justify-center h-16 w-16 rounded-full mb-4 bg-red-100';
            modalIcon.innerHTML = '<svg class="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
        }
        
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        modal.setAttribute('aria-hidden', 'false');
        
        // Focus on close button for accessibility
        if (modalCloseBtn) {
            setTimeout(function() {
                modalCloseBtn.focus();
            }, 100);
        }
    }
    
    function hideModal() {
        if (!modal) return;
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        modal.setAttribute('aria-hidden', 'true');
    }
    
    // Close modal handlers
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', hideModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                hideModal();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                hideModal();
            }
        });
    }
    
    // Export to global scope for use in form handlers
    window.showFormModal = showModal;
    window.hideFormModal = hideModal;
})();

// Contact form handler with AJAX submission
(function() {
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var subject = document.getElementById('subject').value.trim() || 'Contact Inquiry';
            var message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                if (window.showFormModal) {
                    window.showFormModal('Missing Information', 'Please fill in all required fields.', false);
                } else {
                alert('Please fill in all required fields.');
                }
                return false;
            }
            
            // Validate email format
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                if (window.showFormModal) {
                    window.showFormModal('Invalid Email', 'Please enter a valid email address.', false);
                } else {
                alert('Please enter a valid email address.');
                }
                return false;
            }
            
            var submitButton = contactForm.querySelector('button[type="submit"]');
            var originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            // Prepare form data
            var formData = new FormData(contactForm);
            formData.append('_captcha', 'false');
            formData.append('_subject', 'Contact Form Submission - Integrity Academy');
            formData.append('_template', 'basic');
            
            // Submit via AJAX
            fetch('https://formsubmit.co/ajax/info@integrityintlacademygombe.ng', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                
                if (data.success) {
                    // Show success modal
                    if (window.showFormModal) {
                        window.showFormModal(
                            'Message Sent Successfully!',
                            'Thank you! Your message has been sent successfully. We will get back to you soon.',
                            true
                        );
                    } else {
                        alert('Thank you! Your message has been sent successfully. We will get back to you soon.');
                    }
                    // Reset form
                    contactForm.reset();
                } else {
                    // Show error modal
                    if (window.showFormModal) {
                        window.showFormModal(
                            'Submission Failed',
                            'Sorry, there was an error sending your message. Please try again or contact us directly at info@integrityintlacademygombe.ng',
                            false
                        );
                    } else {
                        alert('Sorry, there was an error sending your message. Please try again.');
                    }
                }
            })
            .catch(function(error) {
                console.error('Form submission error:', error);
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                
                // Show error modal
                if (window.showFormModal) {
                    window.showFormModal(
                        'Submission Failed',
                        'Sorry, there was an error sending your message. Please try again or contact us directly at info@integrityintlacademygombe.ng',
                        false
                    );
                } else {
                    alert('Sorry, there was an error sending your message. Please try again.');
                }
            });
            
            return false;
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

// Newsletter form handler with AJAX submission
(function() {
    var newsletterForms = document.querySelectorAll('#newsletterForm');
    if (newsletterForms.length > 0) {
        newsletterForms.forEach(function(newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                var emailInput = this.querySelector('input[type="email"]');
                var email = emailInput.value.trim();
                
                if (!email) {
                    if (window.showFormModal) {
                        window.showFormModal('Missing Email', 'Please enter your email address.', false);
                    } else {
                    alert('Please enter your email address.');
                    }
                    return false;
                }
                
                // Validate email format
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    if (window.showFormModal) {
                        window.showFormModal('Invalid Email', 'Please enter a valid email address.', false);
                    } else {
                    alert('Please enter a valid email address.');
                    }
                    return false;
                }
                
                var submitButton = this.querySelector('button[type="submit"]');
                var originalButtonText = submitButton.textContent;
                submitButton.disabled = true;
                submitButton.textContent = 'Subscribing...';
                
                // Prepare form data
                var formData = new FormData();
                formData.append('email', email);
                formData.append('_captcha', 'false');
                formData.append('_subject', 'Newsletter Subscription - Integrity Academy');
                formData.append('_template', 'basic');
                
                // Submit via AJAX
                fetch('https://formsubmit.co/ajax/info@integrityintlacademygombe.ng', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                    
                    if (data.success) {
                        // Show success modal
                        if (window.showFormModal) {
                            window.showFormModal(
                                'Subscription Successful!',
                                'Thank you for subscribing! You have been added to our mailing list.',
                                true
                            );
                        } else {
                            alert('Thank you for subscribing! You have been added to our mailing list.');
                        }
                        // Reset form
                        newsletterForm.reset();
                    } else {
                        // Show error modal
                        if (window.showFormModal) {
                            window.showFormModal(
                                'Subscription Failed',
                                'Sorry, there was an error processing your subscription. Please try again.',
                                false
                            );
                        } else {
                            alert('Sorry, there was an error processing your subscription. Please try again.');
                        }
                    }
                })
                .catch(function(error) {
                    console.error('Newsletter submission error:', error);
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                    
                    // Show error modal
                    if (window.showFormModal) {
                        window.showFormModal(
                            'Subscription Failed',
                            'Sorry, there was an error processing your subscription. Please try again.',
                            false
                        );
                    } else {
                        alert('Sorry, there was an error processing your subscription. Please try again.');
                    }
                });
                
                return false;
            });
        });
    }
})();

// Floating Header - Add shadow on scroll
(function() {
    var header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
})();

// Scroll Animation - Intersection Observer
(function() {
    // Respect user's motion preferences
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // If user prefers reduced motion, add animated class immediately
        document.addEventListener('DOMContentLoaded', function() {
            var animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in, .scale-in');
            animatedElements.forEach(function(el) {
                el.classList.add('animated');
            });
        });
        return;
    }
    
    // Create Intersection Observer
    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Optionally unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        var animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in, .scale-in');
        animatedElements.forEach(function(el) {
            observer.observe(el);
        });
    });
})();

// Parallax Scroll Effects - REMOVED to prevent irregular scroll movements
