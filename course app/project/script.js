// Course data with embeddable YouTube video IDs
const courseData = {
    'rfscVS0vtbw': 'Python Tutorial - Python Full Course for Beginners',
    'UB1O30fR-EE': 'HTML CSS JavaScript - Full Course for Beginners',
    'ua-CiDNNj30': 'Data Science Tutorial - Learn Data Analysis with Python',
    'aircAruvnKk': 'But what is a Neural Network? | Deep learning, chapter 1',
    'bMknfKXIFA8': 'React Tutorial for Beginners - Learn React in 1 Hour',
    'f2EqECiTBL8': 'Node.js Tutorial for Beginners - Full Course in 3 Hours',
    'VPRjG1sOIlk': 'Flutter Tutorial for Beginners - Build iOS & Android Apps',
    'k1RI5locZE4': 'AWS Tutorial - Amazon Web Services Full Course'
};

// Global modal functions
function openModal(videoId) {
    console.log('Opening modal for video:', videoId);
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    const modalTitle = document.getElementById('modalTitle');
    
    if (modal && videoFrame) {
        // Set the title
        if (modalTitle && courseData[videoId]) {
            modalTitle.textContent = courseData[videoId];
        }
        
        // Create YouTube embed URL with proper parameters to allow embedding
        const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}&rel=0&modestbranding=1&showinfo=0&controls=1&fs=1&cc_load_policy=0&iv_load_policy=3&playsinline=1`;
        
        console.log('Setting video URL:', embedUrl);
        videoFrame.src = embedUrl;
        
        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add CSS transition
        modal.style.transition = 'opacity 0.3s ease';
        modal.style.opacity = '0';
        
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
        
        console.log('Modal opened successfully');
    } else {
        console.error('Modal elements not found');
    }
}

function closeModal() {
    console.log('Closing modal');
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    
    if (modal && videoFrame) {
        modal.style.opacity = '0';
        
        setTimeout(() => {
            modal.style.display = 'none';
            videoFrame.src = '';
            document.body.style.overflow = 'auto';
        }, 300);
        
        console.log('Modal closed');
    }
}

function login() {
    const btn = document.querySelector('.login-btn');
    if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
        btn.disabled = true;
        
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1500);
    }
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing MyCourseHub...');
    
    // Modal event listeners
    window.onclick = function(event) {
        const modal = document.getElementById('videoModal');
        if (event.target === modal) {
            closeModal();
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Navigation smooth scrolling
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        });
    }

    // Preview button interactions
    const previewBtns = document.querySelectorAll('.preview-btn');
    previewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 1000);
        });
    });

    // Course card hover effects
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Stats animation
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(statsSection);
    }

    // Dashboard initialization
    if (document.body.classList.contains('dashboard-body')) {
        initDashboard();
    }

    console.log('MyCourseHub initialized successfully');
});

// Animate statistics
function animateStats() {
    const statItems = document.querySelectorAll('.stat-item h3');
    const realValues = ['127,543+', '847+', '94%', '24/7'];
    
    statItems.forEach((stat, index) => {
        if (index < 3) {
            const targetValue = parseInt(realValues[index].replace(/[^0-9]/g, ''));
            animateNumber(stat, targetValue, realValues[index].includes('+') ? '+' : (realValues[index].includes('%') ? '%' : ''));
        } else {
            stat.textContent = realValues[index];
        }
    });
}

function animateNumber(element, targetValue, suffix = '') {
    let currentValue = 0;
    const increment = targetValue / 60;
    
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            element.textContent = targetValue.toLocaleString() + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(currentValue).toLocaleString() + suffix;
        }
    }, 25);
}

// Dashboard functionality
function initDashboard() {
    const statNumbers = document.querySelectorAll('.stat-info h3');
    statNumbers.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        if (!isNaN(finalValue)) {
            animateNumber(stat, finalValue);
        }
    });

    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// Make functions globally available
window.openModal = openModal;
window.closeModal = closeModal;
window.login = login;