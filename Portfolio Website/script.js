 window.addEventListener('load', () => {
            const loading = document.getElementById('loading');
            setTimeout(() => {
                loading.classList.add('hidden');
            }, 1500);
        });

        const cursor = document.querySelector('.cursor');
        const animatedBg = document.getElementById('animatedBg');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
           
            animatedBg.style.setProperty('--x', mouseX + 'px');
            animatedBg.style.setProperty('--y', mouseY + 'px');
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        document.querySelectorAll('a, button, .project-card, .skill, .cta-button, .submit-btn, .logo, .tag').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });

        // Fixed Mobile Menu Toggle
        const mobileMenu = document.getElementById('mobileMenu');
        const navLinks = document.getElementById('navLinks');

        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });

        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        const typewriterText = document.getElementById('typewriterText');
        const texts = [
            'Full-Stack Developer & UI/UX Enthusiast',
            'Full-Stack JavaScript Developer',
            'Database & API Architect',
            'Responsive Design Expert & UX Focused',
            'Modern Web Technologies Enthusiast'
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function typeWriter() {
            const currentText = texts[textIndex];
            const displayText = isDeleting 
                ? currentText.substring(0, charIndex - 1)
                : currentText.substring(0, charIndex + 1);
            
            typewriterText.innerHTML = displayText + '<span style="animation: blink 1s infinite; color: var(--primary); margin-left: 2px;">|</span>';
            
            if (isDeleting) {
                charIndex--;
                typeSpeed = 50;
            } else {
                charIndex++;
                typeSpeed = Math.random() * 100 + 50;
            }

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }

            setTimeout(typeWriter, typeSpeed);
        }

        setTimeout(typeWriter, 2000);


        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 100; 
            const startPosition = window.pageYOffset;
            const distance = offsetTop - startPosition;
            const duration = Math.min(Math.abs(distance) / 2, 1000); 
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);

                const ease = progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

                window.scrollTo(0, startPosition + (distance * ease));

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }

            requestAnimationFrame(animation);
        }
    });
});

        document.getElementById('contactForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('.submit-btn');
            const originalHTML = btn.innerHTML;

            btn.innerHTML = '<span style="animation: spin 1s linear infinite;">🔄</span> Sending...';
            btn.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
            btn.disabled = true;
 
            await new Promise(resolve => setTimeout(resolve, 2500));

            btn.innerHTML = '<span style="animation: bounce 0.6s ease;">✅</span> Message Sent!';
            btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = 'var(--gradient-3)';
                btn.disabled = false;
                e.target.reset();
            }, 3500);
        });

        let ticking = false;

        function updateParallax() {
            const scrolled = window.pageYOffset;
            const shapes = document.querySelectorAll('.shape');
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.3;
                const rotation = scrolled * 0.05;
                shape.style.transform = `translateY(${scrolled * speed}px) rotate(${rotation * (index + 1)}deg) scale(${1 + scrolled * 0.0003})`;
            });
            
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        });

        function createParticle(x = null, y = null) {
            const particle = document.createElement('div');
            const colors = [
                'rgba(99, 102, 241, 0.8)', 
                'rgba(139, 92, 246, 0.8)', 
                'rgba(6, 182, 212, 0.8)',
                'rgba(245, 101, 101, 0.8)'
            ];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const size = 2 + Math.random() * 6;
            
            particle.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                background: ${randomColor};
                border-radius: 50%;
                pointer-events: none;
                z-index: 100;
                left: ${x || Math.random() * window.innerWidth}px;
                top: ${y || window.innerHeight + 10}px;
                box-shadow: 0 0 ${size * 2}px ${randomColor};
                animation: particleFloat ${4 + Math.random() * 3}s ease-out forwards;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.remove();
                }
            }, 8000);
        }

        function createBurstParticles(element) {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            for (let i = 0; i < 12; i++) {
                setTimeout(() => {
                    createParticle(
                        centerX + (Math.random() - 0.5) * 200,
                        centerY + (Math.random() - 0.5) * 200
                    );
                }, i * 100);
            }
        }

        const particleStyles = document.createElement('style');
        particleStyles.textContent = `
            @keyframes particleFloat {
                0% {
                    transform: translateY(0px) translateX(0px) rotate(0deg) scale(0);
                    opacity: 1;
                }
                10% {
                    transform: translateY(-20px) translateX(${Math.random() * 40 - 20}px) rotate(45deg) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-${100 + Math.random() * 200}px) translateX(${Math.random() * 200 - 100}px) rotate(720deg) scale(0);
                    opacity: 0;
                }
            }
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0) scale(1); }
                40% { transform: translateY(-15px) scale(1.1); }
                60% { transform: translateY(-8px) scale(1.05); }
            }
        `;
        document.head.appendChild(particleStyles);

    
        let particleInterval = setInterval(() => createParticle(), 1500);

        const navbar = document.getElementById('navbar');
        let lastScrollY = window.scrollY;
        let scrollTimer = null;

        function handleNavbarScroll() {
            const currentScrollY = window.scrollY;
            
     
            if (currentScrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            if (window.innerWidth > 768) {
                if (currentScrollY > lastScrollY && currentScrollY > 150) {
                    navbar.style.transform = 'translateY(-100%)';
                    navbar.style.opacity = '0.9';
                } else {
                    navbar.style.transform = 'translateY(0)';
                    navbar.style.opacity = '1';
                }
            }
            
            lastScrollY = currentScrollY;

            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                navbar.style.transform = 'translateY(0)';
                navbar.style.opacity = '1';
            }, 150);
        }

        window.addEventListener('scroll', handleNavbarScroll);

        document.querySelectorAll('.skill').forEach((skill, index) => {
            skill.addEventListener('mouseenter', () => {
                const icon = skill.querySelector('.skill-icon');
                icon.style.transform = 'scale(1.3) rotate(10deg)';
                skill.style.zIndex = '10';
                
                setTimeout(() => {
                    for (let i = 0; i < 3; i++) {
                        const rect = skill.getBoundingClientRect();
                        createParticle(
                            rect.left + rect.width / 2 + (Math.random() - 0.5) * 50,
                            rect.top + rect.height / 2 + (Math.random() - 0.5) * 50
                        );
                    }
                }, 200);
            });
            
            skill.addEventListener('mouseleave', () => {
                const icon = skill.querySelector('.skill-icon');
                icon.style.transform = 'scale(1) rotate(0deg)';
                skill.style.zIndex = '1';
            });
        });

        document.querySelectorAll('.project-card').forEach((card, index) => {
            card.addEventListener('mouseenter', () => {
                card.style.zIndex = '20';

                document.querySelectorAll('.project-card').forEach((otherCard, otherIndex) => {
                    if (otherIndex !== index) {
                        otherCard.style.transform = 'translateY(5px) scale(0.98)';
                        otherCard.style.opacity = '0.7';
                    }
                });
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.zIndex = '1';

                document.querySelectorAll('.project-card').forEach(otherCard => {
                    otherCard.style.transform = 'translateY(0) scale(1)';
                    otherCard.style.opacity = '1';
                });
            });
        });

 
        navbar.style.transition = 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });


        const additionalStyles = document.createElement('style');
        additionalStyles.textContent = `
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: scale(0.8);
                    filter: blur(10px);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                    filter: blur(0px);
                }
            }
            
            .project-card {
                transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
            }
            
            .skill {
                transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
            }
            
            .skill-icon {
                transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
            }
        `;
        document.head.appendChild(additionalStyles);
        

        console.log('🚀 Enhanced portfolio loaded successfully!');