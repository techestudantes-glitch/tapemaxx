document.addEventListener('DOMContentLoaded', () => {
    // 1. FAQ Accordion Logic (Singleton Pattern)
    const faqButtons = document.querySelectorAll('.faq-btn');
    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
            
            // Open clicked if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 2. Premium Hero Carousel (Cross-fade Simulation)
    const carouselImgs = document.querySelectorAll('.carousel-inner img');
    let currentIdx = 0;

    function nextSlide() {
        if (carouselImgs.length === 0) return;
        carouselImgs[currentIdx].classList.remove('active');
        currentIdx = (currentIdx + 1) % carouselImgs.length;
        carouselImgs[currentIdx].classList.add('active');
    }

    if (carouselImgs.length > 1) {
        setInterval(nextSlide, 4000);
    }

    // 3. Countdown Timer (Persistent Feeling)
    function updateTimers() {
        const now = new Date();
        // Fixed end time (e.g. end of current day)
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
        const diff = endOfDay - now;
        
        if (diff <= 0) return;

        const h = Math.floor(diff / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        
        const timeStr = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        
        const stickyTime = document.getElementById('sticky-time-val');
        const finalTime = document.getElementById('final-timer');
        
        if (stickyTime) stickyTime.textContent = timeStr;
        if (finalTime) finalTime.textContent = timeStr;
    }

    setInterval(updateTimers, 1000);
    updateTimers();

    // 4. Advanced Wizard Logic
    const typeSelect = document.getElementById('vehicle-type');
    const brandSelect = document.getElementById('vehicle-brand');
    const modelSelect = document.getElementById('vehicle-model');
    const yearSelect = document.getElementById('vehicle-year');
    const steps = document.querySelectorAll('.step-item');

    const brandData = {
        sedan: ['Toyota', 'Honda', 'Volkswagen', 'Fiat', 'Chevrolet', 'BMW', 'Mercedes'],
        suv: ['Jeep', 'Hyundai', 'Toyota', 'Ford', 'Land Rover', 'Volvo'],
        picape: ['Toyota Hilux', 'Ford Ranger', 'Chevrolet S10', 'Mitsubishi L200', 'VW Amarok'],
        hatch: ['VW Polo', 'Hyundai HB20', 'Fiat Argo', 'Chevrolet Onix']
    };

    typeSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val) {
            brandSelect.disabled = false;
            brandSelect.innerHTML = '<option value="">Qual a marca?</option>';
            brandData[val].forEach(b => {
                const opt = document.createElement('option');
                opt.value = b.toLowerCase().replace(' ', '-');
                opt.textContent = b;
                brandSelect.appendChild(opt);
            });
            steps[1].classList.add('active');
        } else {
            resetWizard(1);
        }
    });

    brandSelect.addEventListener('change', () => {
        modelSelect.disabled = false;
        modelSelect.innerHTML = '<option value="">Qual o modelo?</option>';
        ['Modelo Premium A', 'Modelo Esportivo B', 'Versão Limited'].forEach(m => {
            const opt = document.createElement('option');
            opt.value = m.toLowerCase().replace(' ', '-');
            opt.textContent = m;
            modelSelect.appendChild(opt);
        });
        steps[2].classList.add('active');
    });

    modelSelect.addEventListener('change', () => {
        yearSelect.disabled = false;
        yearSelect.innerHTML = '<option value="">Qual o ano?</option>';
        for (let i = 2025; i >= 2012; i--) {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = i;
            yearSelect.appendChild(opt);
        }
        steps[3].classList.add('active');
    });

    function resetWizard(fromStep) {
        if (fromStep <= 1) {
            brandSelect.disabled = true;
            brandSelect.innerHTML = '<option>Aguardando...</option>';
            steps[1].classList.remove('active');
        }
        modelSelect.disabled = true;
        modelSelect.innerHTML = '<option>Aguardando...</option>';
        steps[2].classList.remove('active');
        yearSelect.disabled = true;
        yearSelect.innerHTML = '<option>Aguardando...</option>';
        steps[3].classList.remove('active');
    }

    // 5. Conversion Buttons (Smooth Scroll to Wizard)
    const buyButtons = document.querySelectorAll('.btn-buy');
    buyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const wizardSection = document.querySelector('.wizard-section');
            if (wizardSection) {
                wizardSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Focus on first select
                setTimeout(() => typeSelect.focus(), 800);
            }
        });
    });

    // 6. Video Interaction (Play/Pause Toggle)
    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach(item => {
        const video = item.querySelector('video');
        const playBtn = item.querySelector('.video-play-btn');
        
        item.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                if (playBtn) playBtn.style.opacity = '0';
            } else {
                video.pause();
                if (playBtn) playBtn.style.opacity = '0.8';
            }
        });
    });

    // 7. Header Scroll Effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.style.padding = '8px 0';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
        } else {
            header.style.padding = '12px 0';
            header.style.boxShadow = 'none';
        }
    });
});
