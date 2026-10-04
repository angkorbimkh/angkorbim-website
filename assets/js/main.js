/**
 * Angkor BIM - Main Client-Side JavaScript
 * Pure Vanilla JS, zero dependencies, lightning fast!
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileMenu();
    initProductTabs();
    initShowcaseMedia();
    initServiceGalleries();
    initBackToTop();
    initModals();
    initContactForm();
});

/* ==========================================================================
   1. Sticky Header on Scroll
   ========================================================================== */
function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
}

/* ==========================================================================
   2. Mobile Menu Toggle
   ========================================================================== */
function initMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (!toggleBtn || !navMenu) return;

    toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
            if (navMenu.classList.contains('open')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
            navMenu.classList.remove('open');
            const icon = toggleBtn.querySelector('i');
            if (icon) icon.className = 'fa-solid fa-bars';
        }
    });
}

/* ==========================================================================
   3. Product Tabs & Deep Linking (#qs, #model, #rebar, #bundle)
   ========================================================================== */
function initProductTabs() {
    const navItems = document.querySelectorAll('.product-nav-item');
    const panes = document.querySelectorAll('.detail-pane');
    if (!navItems.length || !panes.length) return;

    function switchProduct(targetId) {
        // Normalize targetId
        if (targetId.startsWith('#')) targetId = targetId.substring(1);
        if (!targetId.startsWith('pane-')) {
            targetId = 'pane-' + targetId.replace('product-', '');
        }

        const targetPane = document.getElementById(targetId);
        if (!targetPane) return;

        // Update nav items
        navItems.forEach(item => {
            if (item.dataset.target === targetId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Update detail panes
        panes.forEach(pane => {
            if (pane.id === targetId) {
                pane.classList.add('active');
            } else {
                pane.classList.remove('active');
            }
        });

        // Update URL hash without jumping
        const cleanHash = targetId.replace('pane-', '');
        history.replaceState(null, null, `#${cleanHash}`);
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.dataset.target;
            if (target) switchProduct(target);
        });
    });

    // Check hash on page load
    if (window.location.hash) {
        const hash = window.location.hash.toLowerCase();
        if (hash.includes('qs')) switchProduct('pane-qs');
        else if (hash.includes('model')) switchProduct('pane-model');
        else if (hash.includes('rebar')) switchProduct('pane-rebar');
        else if (hash.includes('bundle')) switchProduct('pane-bundle');
    }
}

/* ==========================================================================
   4. Product Media Showcase (GIFs / Demos)
   ========================================================================== */
function initShowcaseMedia() {
    const showcaseTabs = document.querySelectorAll('.showcase-tab-btn');
    showcaseTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.closest('.media-showcase');
            if (!parent) return;

            // Remove active from siblings
            parent.querySelectorAll('.showcase-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Swap image src
            const newSrc = btn.dataset.src;
            const img = parent.querySelector('.showcase-display img');
            if (img && newSrc) {
                img.style.opacity = '0.3';
                setTimeout(() => {
                    img.src = newSrc;
                    img.style.opacity = '1';
                }, 150);
            }
        });
    });
}

/* ==========================================================================
   5. Service Photo Galleries & Lightbox
   ========================================================================== */
function initServiceGalleries() {
    const thumbs = document.querySelectorAll('.service-thumb');
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const gallery = thumb.closest('.service-item-gallery');
            if (!gallery) return;

            gallery.querySelectorAll('.service-thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');

            const mainImg = gallery.querySelector('.service-gallery-main');
            if (mainImg) {
                mainImg.src = thumb.src;
            }
        });
    });

    // Lightbox image preview on click
    const mainImages = document.querySelectorAll('.service-gallery-main, .screen-card-body img');
    const lightbox = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');

    if (lightbox && lightboxImg) {
        mainImages.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
            });
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                lightbox.classList.remove('active');
            }
        });
    }
}

/* ==========================================================================
   6. Back to Top Button
   ========================================================================== */
function initBackToTop() {
    const topBtn = document.querySelector('.btn-float-top');
    if (!topBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            topBtn.classList.add('visible');
        } else {
            topBtn.classList.remove('visible');
        }
    }, { passive: true });

    topBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ==========================================================================
   7. Modals (Donate / Support QR)
   ========================================================================== */
function initModals() {
    const modalTriggers = document.querySelectorAll('[data-open-modal]');
    const closeBtns = document.querySelectorAll('.modal-close-btn, [data-close-modal]');

    modalTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = btn.dataset.openModal;
            const modal = document.getElementById(modalId);
            if (modal) modal.classList.add('active');
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-overlay');
            if (modal) modal.classList.remove('active');
        });
    });

    // Close on background click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('active');
        });
    });
}

/* ==========================================================================
   8. Contact & Quote Form Handling (Static Client-Side)
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector('[name="name"]')?.value || '';
        const phone = form.querySelector('[name="phone"]')?.value || '';
        const subject = form.querySelector('[name="subject"]')?.value || 'Angkor BIM Inquiry';
        const message = form.querySelector('[name="message"]')?.value || '';

        if (!name.trim() || !phone.trim()) {
            alert('សូមបញ្ចូលឈ្មោះ និងលេខទូរស័ព្ទរបស់លោកអ្នក!');
            return;
        }

        // Format message for Telegram
        const tgText = encodeURIComponent(
            `សួស្តី Angkor BIM!\n\n` +
            `ឈ្មោះ: ${name}\n` +
            `លេខទូរស័ព្ទ: ${phone}\n` +
            `ប្រធានបទ: ${subject}\n` +
            `សារ: ${message}`
        );

        const tgUrl = `https://t.me/angkorbim168?text=${tgText}`;
        window.open(tgUrl, '_blank');
    });
}
