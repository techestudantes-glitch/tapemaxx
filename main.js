document.addEventListener('DOMContentLoaded', () => {
    // Vehicle Data
    const vehicleData = {
        sedan: {
            brands: {
                toyota: { models: ['Corolla', 'Camry'], years: ['2020-2024', '2015-2019'] },
                honda: { models: ['Civic', 'City'], years: ['2020-2024', '2016-2020'] },
                chevrolet: { models: ['Onix Plus', 'Cruze'], years: ['2019-2024', '2014-2018'] }
            }
        },
        suv: {
            brands: {
                jeep: { models: ['Compass', 'Renegade'], years: ['2018-2024', '2015-2017'] },
                toyota: { models: ['Corolla Cross', 'SW4'], years: ['2021-2024', '2016-2020'] },
                hyundai: { models: ['Creta'], years: ['2020-2024', '2017-2019'] }
            }
        },
        picape: {
            brands: {
                toyota: { models: ['Hilux'], years: ['2016-2024'] },
                ford: { models: ['Ranger'], years: ['2017-2024'] },
                fiat: { models: ['Toro'], years: ['2016-2024'] }
            }
        }
    };

    // Wizard
    const typeSelect = document.getElementById('vehicle-type');
    const brandSelect = document.getElementById('vehicle-brand');
    const modelSelect = document.getElementById('vehicle-model');
    const yearSelect = document.getElementById('vehicle-year');
    const steps = document.querySelectorAll('.step-item');

    typeSelect?.addEventListener('change', () => {
        const type = typeSelect.value;
        brandSelect.innerHTML = '<option value="">Selecione a marca</option>';
        modelSelect.innerHTML = '<option value="">Aguardando marca</option>';
        yearSelect.innerHTML = '<option value="">Aguardando modelo</option>';
        brandSelect.disabled = !type;
        modelSelect.disabled = true;
        yearSelect.disabled = true;
        
        steps.forEach(s => s.classList.remove('active'));
        steps[0].classList.add('active');

        if (type && vehicleData[type]) {
            Object.keys(vehicleData[type].brands).forEach(b => {
                brandSelect.add(new Option(b.toUpperCase(), b));
            });
            steps[1].classList.add('active');
        }
    });

    brandSelect?.addEventListener('change', () => {
        const type = typeSelect.value;
        const brand = brandSelect.value;
        modelSelect.innerHTML = '<option value="">Selecione o modelo</option>';
        modelSelect.disabled = !brand;

        if (type && brand) {
            vehicleData[type].brands[brand].models.forEach(m => {
                modelSelect.add(new Option(m, m));
            });
            steps[2].classList.add('active');
        }
    });

    modelSelect?.addEventListener('change', () => {
        const type = typeSelect.value;
        const brand = brandSelect.value;
        const model = modelSelect.value;
        yearSelect.innerHTML = '<option value="">Selecione o ano</option>';
        yearSelect.disabled = !model;

        if (type && brand && model) {
            vehicleData[type].brands[brand].years.forEach(y => {
                yearSelect.add(new Option(y, y));
            });
            steps[3].classList.add('active');
        }
    });

    // Carousel
    const carousel = document.getElementById('main-carousel');
    if (carousel) {
        const images = carousel.querySelectorAll('.carousel-inner img');
        const dots = carousel.querySelectorAll('.dot');
        let current = 0;

        const show = (i) => {
            images.forEach(img => img.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            images[i].classList.add('active');
            dots[i].classList.add('active');
            current = i;
        };

        carousel.querySelector('.prev')?.addEventListener('click', () => show((current - 1 + images.length) % images.length));
        carousel.querySelector('.next')?.addEventListener('click', () => show((current + 1) % images.length));
        dots.forEach((d, i) => d.addEventListener('click', () => show(i)));
        setInterval(() => show((current + 1) % images.length), 5000);
    }

    // Comparison Slider
    const slider = document.getElementById('comparison-slider');
    if (slider) {
        const before = slider.querySelector('.before-img');
        const handle = slider.querySelector('.slider-handle');
        const move = (e) => {
            const rect = slider.getBoundingClientRect();
            const x = (e.pageX || e.touches[0].pageX) - rect.left;
            let p = (x / rect.width) * 100;
            p = Math.max(0, Math.min(100, p));
            before.style.width = `${p}%`;
            handle.style.left = `${p}%`;
        };
        slider.addEventListener('mousemove', move);
        slider.addEventListener('touchmove', move);
    }

    // FAQ
    document.querySelectorAll('.faq-header').forEach(h => {
        h.addEventListener('click', () => {
            const c = h.nextElementSibling;
            const open = c.style.maxHeight;
            document.querySelectorAll('.accordion-content').forEach(el => el.style.maxHeight = null);
            if (!open) c.style.maxHeight = c.scrollHeight + "px";
        });
    });

    // Timers
    function startTimers() {
        let time = 13 * 3600 + 28 * 60 + 58;
        const sticky = document.getElementById('sticky-time');
        const hFinal = document.getElementById('hours-final');
        const mFinal = document.getElementById('minutes-final');
        const sFinal = document.getElementById('seconds-final');

        setInterval(() => {
            if (time <= 0) return;
            time--;
            const h = Math.floor(time / 3600);
            const m = Math.floor((time % 3600) / 60);
            const s = time % 60;
            const str = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
            if (sticky) sticky.innerText = str;
            if (hFinal) hFinal.innerText = String(h).padStart(2,'0');
            if (mFinal) mFinal.innerText = String(m).padStart(2,'0');
            if (sFinal) sFinal.innerText = String(s).padStart(2,'0');
        }, 1000);
    }
    startTimers();

    // Sticky CTA show/hide
    const stickyCta = document.getElementById('sticky-cta');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            stickyCta.style.transform = 'translateY(0)';
            stickyCta.style.opacity = '1';
        } else {
            stickyCta.style.transform = 'translateY(100%)';
            stickyCta.style.opacity = '0';
        }
    });

    // Video Play
    document.querySelectorAll('.video-card').forEach(card => {
        const v = card.querySelector('video');
        card.addEventListener('click', () => {
            if (v.paused) {
                v.play();
                card.querySelector('.play-icon').style.display = 'none';
            } else {
                v.pause();
                card.querySelector('.play-icon').style.display = 'flex';
            }
        });
    });
});
