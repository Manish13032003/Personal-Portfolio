// ===== MOBILE NAVIGATION =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== SMOOTH SCROLLING =====
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

// ===== NAVBAR BACKGROUND ON SCROLL =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===== ANIMATED COUNTER FOR STATS =====
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 100;
    const duration = 2000;
    const stepTime = duration / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (target >= 50 ? '+' : '%');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (target >= 50 ? '' : '%');
        }
    }, stepTime);
};

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ===== SKILL BARS ANIMATION =====
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            const skillPercentages = entry.target.querySelectorAll('.skill-percentage');
            
            skillBars.forEach((bar, index) => {
                const progress = bar.getAttribute('data-progress');
                setTimeout(() => {
                    bar.style.width = progress + '%';
                    
                    // Animate percentage counter
                    if (skillPercentages[index]) {
                        animatePercentage(skillPercentages[index], parseInt(progress));
                    }
                }, 200);
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Function to animate percentage numbers
const animatePercentage = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const duration = 1000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '%';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '%';
        }
    }, stepTime);
};

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// ===== PROJECT CARDS STAGGERED ANIMATION =====
const projectsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 150);
            });
            projectsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Set initial state for project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.5s ease';
});

const projectsSection = document.querySelector('.projects-grid');
if (projectsSection) {
    projectsObserver.observe(projectsSection);
}

// ===== GLITCH EFFECT ON HERO TEXT =====
const glitchText = document.querySelector('.glitch');
if (glitchText) {
    setInterval(() => {
        if (Math.random() > 0.95) {
            glitchText.style.textShadow = `
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px #00d4ff,
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px #7c3aed
            `;
            setTimeout(() => {
                glitchText.style.textShadow = 'none';
            }, 50);
        }
    }, 100);
}

// ===== PARALLAX EFFECT ON SCROLL =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before, .hero::after');
    
    parallaxElements.forEach(element => {
        element.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});

// ===== TYPING EFFECT FOR SUBTITLE =====
const subtitle = document.querySelector('.subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let index = 0;
    
    const typeWriter = () => {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 80);
        }
    };
    
    setTimeout(typeWriter, 1000);
}

// ===== FORM SUBMISSION =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent! ✓';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.opacity = '1';
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        }, 2000);
    });
}

// ===== CURSOR TRAIL EFFECT (IoT-themed) =====
const createCursorTrail = () => {
    const trail = [];
    const trailLength = 8;
    
    document.addEventListener('mousemove', (e) => {
        const dot = document.createElement('div');
        dot.className = 'cursor-dot';
        dot.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: linear-gradient(135deg, #00d4ff, #7c3aed);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            opacity: 0.7;
            transition: all 0.3s ease;
            box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        `;
        
        document.body.appendChild(dot);
        trail.push(dot);
        
        if (trail.length > trailLength) {
            const oldDot = trail.shift();
            oldDot.style.opacity = '0';
            setTimeout(() => oldDot.remove(), 300);
        }
        
        setTimeout(() => {
            dot.style.opacity = '0';
            dot.style.transform = 'scale(0)';
        }, 100);
    });
};

if (window.innerWidth > 768) {
    createCursorTrail();
}

// ===== PROJECT CARDS 3D TILT EFFECT =====
const tiltCards = document.querySelectorAll('.project-card, .education-card, .cert-card');
tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ===== ACTIVE SECTION HIGHLIGHTING IN NAV =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const highlightNav = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNav);

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('.about-text, .contact-info, .skill-category, .timeline-item, .cert-card');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.8s ease';
    revealObserver.observe(element);
});

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== EDUCATION CARDS INTERACTIVE GLOW =====
const educationCards = document.querySelectorAll('.education-card');
educationCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.4)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
    });
});

// ===== CERTIFICATION CARDS SHINE EFFECT =====
const certCards = document.querySelectorAll('.cert-card');
certCards.forEach((card, index) => {
    setTimeout(() => {
        card.style.animation = 'pulse 2s ease-in-out infinite';
        card.style.animationDelay = `${index * 0.5}s`;
    }, 1000);
});

// ===== IOT-THEMED PARTICLE BACKGROUND =====
const createParticles = () => {
    const particleCount = 30;
    const hero = document.querySelector('.hero');
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(0, 212, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        hero.appendChild(particle);
    }
};

// Add particle animation to CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

createParticles();

// ===== CONSOLE MESSAGE =====
console.log('%c Welcome to Manish Chimankar\'s Portfolio! 🚀', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%c Python Developer | IoT Engineer | Data Analytics Enthusiast', 'color: #7c3aed; font-size: 14px;');
console.log('%c Built with ❤️ using HTML, CSS, and JavaScript', 'color: #f59e0b; font-size: 12px;');
console.log('%c Email: manishchimankar13@gmail.com', 'color: #10b981; font-size: 12px;');

// ===== DYNAMIC YEAR IN FOOTER =====
const updateYear = () => {
    const year = new Date().getFullYear();
    const footer = document.querySelector('.footer p');
    if (footer && footer.textContent.includes('2025')) {
        footer.textContent = footer.textContent.replace('2025', year);
    }
};

updateYear();

// ===== EASTER EGG: IoT Command =====
let commandSequence = [];
const secretCommand = ['i', 'o', 't'];

document.addEventListener('keydown', (e) => {
    commandSequence.push(e.key.toLowerCase());
    commandSequence = commandSequence.slice(-3);
    
    if (commandSequence.join('') === secretCommand.join('')) {
        createIoTEffect();
        alert('🤖 IoT Mode Activated! You\'ve discovered the hidden feature!');
        commandSequence = [];
    }
});

// ===== IOT EFFECT =====
const createIoTEffect = () => {
    const colors = ['#00d4ff', '#7c3aed', '#f59e0b', '#10b981'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: ${Math.random() * 15 + 5}px;
                height: ${Math.random() * 15 + 5}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                top: 50%;
                left: 50%;
                border-radius: 50%;
                pointer-events: none;
                z-index: 10000;
                animation: explode ${1 + Math.random()}s ease-out forwards;
            `;
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 2000);
        }, i * 20);
    }
};

// Add explode animation
const explodeStyle = document.createElement('style');
explodeStyle.textContent = `
    @keyframes explode {
        to {
            transform: translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) rotate(${Math.random() * 360}deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(explodeStyle);

// ===== SMOOTH SCROLL TO TOP BUTTON =====
const createScrollTopBtn = () => {
    const btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.className = 'scroll-top-btn';
    btn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--gradient-1);
        border: none;
        border-radius: 50%;
        color: white;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 5px 20px rgba(0, 212, 255, 0.4);
    `;
    
    document.body.appendChild(btn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        } else {
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(20px)';
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0) scale(1)';
    });
};

createScrollTopBtn();

// ===== FLOATING RESUME BUTTON VISIBILITY =====
const floatingResumeBtn = document.querySelector('.floating-resume-btn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
        floatingResumeBtn.classList.add('visible');
    } else {
        floatingResumeBtn.classList.remove('visible');
    }
});

// ===== RESUME DOWNLOAD TRACKING =====
const resumeButtons = document.querySelectorAll('a[download]');
resumeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('📄 Resume download initiated');
        
        // Optional: Show confirmation message
        setTimeout(() => {
            const confirmation = document.createElement('div');
            confirmation.style.cssText = `
                position: fixed;
                top: 100px;
                right: 30px;
                background: var(--gradient-3);
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
                z-index: 10001;
                animation: slideInRight 0.3s ease;
            `;
            confirmation.textContent = '✓ Resume download started!';
            document.body.appendChild(confirmation);
            
            setTimeout(() => {
                confirmation.style.opacity = '0';
                confirmation.style.transform = 'translateX(100px)';
                setTimeout(() => confirmation.remove(), 300);
            }, 2000);
        }, 100);
    });
});

// Add slide in animation
const slideStyle = document.createElement('style');
slideStyle.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(slideStyle);
