document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion Logic
    const faqButtons = document.querySelectorAll('.faq-btn');
    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all other items
            document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Carousel Logic
    const carouselImgs = document.querySelectorAll('.carousel-inner img');
    let currentIdx = 0;

    function nextSlide() {
        carouselImgs[currentIdx].classList.remove('active');
        currentIdx = (currentIdx + 1) % carouselImgs.length;
        carouselImgs[currentIdx].classList.add('active');
    }

    setInterval(nextSlide, 3000);

    // Countdown Timer Logic
    function updateTimers() {
        const now = new Date();
        const hours = 13 - now.getHours() % 13;
        const minutes = 59 - now.getMinutes();
        const seconds = 59 - now.getSeconds();
        
        const timeStr = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        const stickyTime = document.getElementById('sticky-time-val');
        const finalTime = document.getElementById('final-timer');
        
        if (stickyTime) stickyTime.textContent = timeStr;
        if (finalTime) finalTime.textContent = timeStr;
    }

    setInterval(updateTimers, 1000);
    updateTimers();

    // Wizard Mock Logic
    const typeSelect = document.getElementById('vehicle-type');
    const brandSelect = document.getElementById('vehicle-brand');
    const modelSelect = document.getElementById('vehicle-model');
    const yearSelect = document.getElementById('vehicle-year');

    const brands = {
        sedan: ['Toyota', 'Honda', 'VW', 'Fiat'],
        suv: ['Jeep', 'Hyundai', 'Toyota', 'Ford'],
        picape: ['Toyota', 'Ford', 'Chevrolet', 'Mitsubishi']
    };

    typeSelect.addEventListener('change', (e) => {
        const type = e.target.value;
        if (type) {
            brandSelect.disabled = false;
            brandSelect.innerHTML = '<option value="">Selecione a marca</option>';
            brands[type].forEach(b => {
                const opt = document.createElement('option');
                opt.value = b.toLowerCase();
                opt.textContent = b;
                brandSelect.appendChild(opt);
            });
            
            // Auto-advance step UI if needed
            document.querySelectorAll('.step-item')[1].classList.add('active');
        } else {
            brandSelect.disabled = true;
            brandSelect.innerHTML = '<option>Aguardando...</option>';
        }
    });

    brandSelect.addEventListener('change', () => {
        modelSelect.disabled = false;
        modelSelect.innerHTML = '<option value="">Selecione o modelo</option>';
        ['Modelo A', 'Modelo B', 'Modelo C'].forEach(m => {
            const opt = document.createElement('option');
            opt.value = m.toLowerCase().replace(' ', '-');
            opt.textContent = m;
            modelSelect.appendChild(opt);
        });
        document.querySelectorAll('.step-item')[2].classList.add('active');
    });

    modelSelect.addEventListener('change', () => {
        yearSelect.disabled = false;
        yearSelect.innerHTML = '<option value="">Selecione o ano</option>';
        for (let i = 2024; i >= 2010; i--) {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = i;
            yearSelect.appendChild(opt);
        }
        document.querySelectorAll('.step-item')[3].classList.add('active');
    });

    // Video Playback Logic
    const videos = document.querySelectorAll('.video-item video');
    videos.forEach(v => {
        v.addEventListener('click', () => {
            if (v.paused) {
                v.play();
            } else {
                v.pause();
            }
        });
    });
});
