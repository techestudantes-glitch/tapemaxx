document.addEventListener('DOMContentLoaded', () => {
    // Vehicle Data for Wizard
    const vehicleData = {
        sedan: {
            brands: {
                toyota: ['Corolla', 'Camry'],
                honda: ['Civic', 'City'],
                chevrolet: ['Onix Plus', 'Cruze'],
                vw: ['Virtus', 'Jetta']
            }
        },
        suv: {
            brands: {
                jeep: ['Compass', 'Renegade'],
                toyota: ['Corolla Cross', 'SW4'],
                honda: ['HR-V', 'ZR-V'],
                hyundai: ['Creta', 'Tucson']
            }
        },
        picape: {
            brands: {
                toyota: ['Hilux'],
                ford: ['Ranger'],
                chevrolet: ['S10'],
                fiat: ['Toro', 'Strada']
            }
        },
        hatch: {
            brands: {
                vw: ['Polo', 'Gol'],
                hyundai: ['HB20'],
                fiat: ['Argo', 'Mobi'],
                chevrolet: ['Onix']
            }
        }
    };

    // Wizard Elements
    const typeSelect = document.getElementById('vehicle-type');
    const brandSelect = document.getElementById('vehicle-brand');
    const modelSelect = document.getElementById('vehicle-model');
    const steps = document.querySelectorAll('.wizard-step-item');

    typeSelect.addEventListener('change', () => {
        const type = typeSelect.value;
        brandSelect.innerHTML = '<option value="">Selecione a marca...</option>';
        modelSelect.innerHTML = '<option value="">Aguardando marca...</option>';
        modelSelect.disabled = true;

        if (type && vehicleData[type]) {
            brandSelect.disabled = false;
            const brands = Object.keys(vehicleData[type].brands);
            brands.forEach(brand => {
                const opt = document.createElement('option');
                opt.value = brand;
                opt.innerText = brand.charAt(0).toUpperCase() + brand.slice(1);
                brandSelect.appendChild(opt);
            });
            steps[1].classList.add('active');
        } else {
            brandSelect.disabled = true;
            steps[1].classList.remove('active');
            steps[2].classList.remove('active');
        }
    });

    brandSelect.addEventListener('change', () => {
        const type = typeSelect.value;
        const brand = brandSelect.value;
        modelSelect.innerHTML = '<option value="">Selecione o modelo...</option>';

        if (type && brand && vehicleData[type].brands[brand]) {
            modelSelect.disabled = false;
            const models = vehicleData[type].brands[brand];
            models.forEach(model => {
                const opt = document.createElement('option');
                opt.value = model.toLowerCase();
                opt.innerText = model;
                modelSelect.appendChild(opt);
            });
            steps[2].classList.add('active');
        } else {
            modelSelect.disabled = true;
            steps[2].classList.remove('active');
        }
    });

    // Carousel Logic
    const carousel = document.getElementById('main-carousel');
    if (carousel) {
        const images = carousel.querySelectorAll('.carousel-inner img');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        let currentIdx = 0;

        function showSlide(idx) {
            images.forEach(img => img.classList.remove('active'));
            images[idx].classList.add('active');
            currentIdx = idx;
        }

        prevBtn?.addEventListener('click', () => {
            let idx = currentIdx - 1;
            if (idx < 0) idx = images.length - 1;
            showSlide(idx);
        });

        nextBtn?.addEventListener('click', () => {
            let idx = (currentIdx + 1) % images.length;
            showSlide(idx);
        });

        setInterval(() => {
            let idx = (currentIdx + 1) % images.length;
            showSlide(idx);
        }, 5000);
    }

    // FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isOpen = content.style.maxHeight;

            // Close all
            document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
            document.querySelectorAll('.accordion-header span').forEach(s => s.innerText = '+');

            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + "px";
                header.querySelector('span').innerText = '-';
            }
        });
    });

    // Comparison Slider
    const slider = document.getElementById('comparison-slider');
    if (slider) {
        const beforeImg = slider.querySelector('.before-img');
        const handle = slider.querySelector('.slider-handle');

        const moveSlider = (e) => {
            const rect = slider.getBoundingClientRect();
            let pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
            let x = pageX - rect.left;
            let percent = (x / rect.width) * 100;
            
            if (percent < 0) percent = 0;
            if (percent > 100) percent = 100;

            beforeImg.style.width = `${percent}%`;
            handle.style.left = `${percent}%`;
        };

        slider.addEventListener('mousemove', moveSlider);
        slider.addEventListener('touchmove', moveSlider);
    }

    // Countdown Timer
    function startCountdown() {
        const h = document.getElementById('hours');
        const m = document.getElementById('minutes');
        const s = document.getElementById('seconds');
        
        let timeLeft = (13 * 3600) + (24 * 60) + 2;

        const timer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timer);
                return;
            }
            timeLeft--;
            
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;

            if (h) h.innerText = String(hours).padStart(2, '0');
            if (m) m.innerText = String(minutes).padStart(2, '0');
            if (s) s.innerText = String(seconds).padStart(2, '0');
        }, 1000);
    }
    startCountdown();

    // Sticky Button Behavior
    const stickyFooter = document.querySelector('.sticky-footer');
    if (stickyFooter) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                stickyFooter.style.transform = 'translateY(0)';
                stickyFooter.style.opacity = '1';
            } else {
                stickyFooter.style.transform = 'translateY(100%)';
                stickyFooter.style.opacity = '0';
            }
        });
        
        stickyFooter.querySelector('button').addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Video Play on Click
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        const video = card.querySelector('video');
        card.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                card.querySelector('.play-btn').style.display = 'none';
            } else {
                video.pause();
                card.querySelector('.play-btn').style.display = 'flex';
            }
        });
    });
});
