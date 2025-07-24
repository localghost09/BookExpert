// Main JavaScript file for common functionality across all pages

// Theme management
const ThemeManager = {
    init() {
        this.setTheme(this.getTheme());
        this.setupThemeToggles();
    },

    getTheme() {
        return localStorage.getItem('theme') ||
               (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    },

    setTheme(theme) {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        this.updateThemeIcons();
    },

    toggleTheme() {
        const currentTheme = this.getTheme();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);

        // Add a subtle animation feedback
        document.body.style.transition = 'background-color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    },

    updateThemeIcons() {
        const isDark = document.documentElement.classList.contains('dark');

        // Update desktop theme toggle
        const desktopSun = document.querySelector('#theme-toggle .fa-sun');
        const desktopMoon = document.querySelector('#theme-toggle .fa-moon');

        if (desktopSun && desktopMoon) {
            if (isDark) {
                desktopSun.classList.add('hidden');
                desktopMoon.classList.remove('hidden');
            } else {
                desktopSun.classList.remove('hidden');
                desktopMoon.classList.add('hidden');
            }
        }

        // Update mobile theme toggle
        const mobileSun = document.querySelector('#mobile-theme-toggle .fa-sun');
        const mobileMoon = document.querySelector('#mobile-theme-toggle .fa-moon');

        if (mobileSun && mobileMoon) {
            if (isDark) {
                mobileSun.classList.add('hidden');
                mobileMoon.classList.remove('hidden');
            } else {
                mobileSun.classList.remove('hidden');
                mobileMoon.classList.add('hidden');
            }
        }
    },

    setupThemeToggles() {
        const themeToggle = document.getElementById('theme-toggle');
        const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        if (mobileThemeToggle) {
            mobileThemeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
};

// Enhanced animations and interactions
const AnimationManager = {
    init() {
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupParallaxEffects();
    },

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.fade-in, [class*="hover:-translate-y"]').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    },

    setupHoverEffects() {
        // Add dynamic hover effects to cards
        document.querySelectorAll('[class*="hover:shadow"]').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
                this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    },

    setupParallaxEffects() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');

            parallaxElements.forEach(el => {
                const speed = el.dataset.speed || 0.5;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
};

// Enhanced mobile menu with animations
const MobileMenuManager = {
    init() {
        this.setupMobileMenu();
    },

    setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                this.toggleMobileMenu(mobileMenu, mobileMenuBtn);
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                    this.closeMobileMenu(mobileMenu, mobileMenuBtn);
                }
            });

            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeMobileMenu(mobileMenu, mobileMenuBtn);
                }
            });
        }
    },

    toggleMobileMenu(menu, btn) {
        const isHidden = menu.classList.contains('hidden');

        if (isHidden) {
            this.openMobileMenu(menu, btn);
        } else {
            this.closeMobileMenu(menu, btn);
        }
    },

    openMobileMenu(menu, btn) {
        menu.classList.remove('hidden');
        menu.style.opacity = '0';
        menu.style.transform = 'translateY(-10px)';

        // Animate in
        requestAnimationFrame(() => {
            menu.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
            menu.style.opacity = '1';
            menu.style.transform = 'translateY(0)';
        });

        // Animate hamburger to X
        const icon = btn.querySelector('i');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');

        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    },

    closeMobileMenu(menu, btn) {
        menu.style.opacity = '0';
        menu.style.transform = 'translateY(-10px)';

        setTimeout(() => {
            menu.classList.add('hidden');
            menu.style.transition = '';
        }, 200);

        // Animate X back to hamburger
        const icon = btn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');

        // Restore body scroll
        document.body.style.overflow = '';
    }
};

// Enhanced notification system
window.showNotification = function(message, type = 'success', duration = 4000) {
    const notification = document.createElement('div');
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };

    const colors = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        warning: 'bg-yellow-500',
        info: 'bg-blue-500'
    };

    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-xl shadow-2xl text-white ${colors[type]} transform translate-x-full opacity-0 transition-all duration-300 max-w-sm`;

    notification.innerHTML = `
        <div class="flex items-center space-x-3">
            <i class="fas ${icons[type]} text-xl"></i>
            <span class="font-medium">${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-auto text-white/80 hover:text-white">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    });

    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(full)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, duration);
};

// Add loading states to buttons
document.querySelectorAll('button[type="submit"], .btn-loading').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.disabled) return;

        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Loading...';
        this.disabled = true;

        // Restore after 2 seconds (for demo)
        setTimeout(() => {
            this.innerHTML = originalText;
            this.disabled = false;
        }, 2000);
    });
});

// Add ripple effect to buttons
document.querySelectorAll('button, .btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            background-color: rgba(255, 255, 255, 0.3);
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
        `;

        if (!this.style.position || this.style.position === 'static') {
            this.style.position = 'relative';
        }
        this.style.overflow = 'hidden';

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme first (prevents flash)
    ThemeManager.init();

    // Initialize other managers
    AnimationManager.init();
    MobileMenuManager.init();

    // Profile menu toggle (for dashboard)
    const profileMenuBtn = document.getElementById('profile-menu-btn');
    const profileMenu = document.getElementById('profile-menu');

    if (profileMenuBtn && profileMenu) {
        profileMenuBtn.addEventListener('click', function() {
            profileMenu.classList.toggle('hidden');
        });

        // Close profile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!profileMenuBtn.contains(event.target)) {
                profileMenu.classList.add('hidden');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

// Global function for browsing by category
window.browseByCategory = function(category) {
    // Add loading state
    if (typeof window.showNotification === 'function') {
        window.showNotification(`Loading ${category} experts...`, 'info', 1000);
    }

    // Redirect to browse page with category parameter
    setTimeout(() => {
        window.location.href = `browse.html?category=${category}`;
    }, 300);
};

// Utility functions
const utils = {
    // Format date for display
    formatDate: function(date) {
        return new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    // Format time for display
    formatTime: function(time) {
        return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    },

    // Show notification (legacy support)
    showNotification: function(message, type = 'success') {
        if (typeof window.showNotification === 'function') {
            window.showNotification(message, type);
        }
    },

    // Validate email
    validateEmail: function(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    // Validate phone
    validatePhone: function(phone) {
        const re = /^\+?[\d\s\-\(\)]{10,}$/;
        return re.test(phone);
    },

    // Debounce function for search
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Copy to clipboard
    copyToClipboard: function(text) {
        navigator.clipboard.writeText(text).then(() => {
            this.showNotification('Copied to clipboard!', 'success');
        }).catch(() => {
            this.showNotification('Failed to copy', 'error');
        });
    }
};
