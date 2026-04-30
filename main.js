document.addEventListener('DOMContentLoaded', () => {
    // Vehicle Data (Enhanced)
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
        }
    };

    // Wizard Logic
    const selects = {
        type: document.getElementById('vehicle-type'),
        brand: document.getElementById('vehicle-brand'),
        model: document.getElementById('vehicle-model'),
        year: document.getElementById('vehicle-year')
    };

    selects.type?.addEventListener('change', () => {
        const val = selects.type.value;
        selects.brand.innerHTML = '<option value="">Selecione...</option>';
        selects.model.innerHTML = '<option value="">Aguardando...</option>';
        selects.year.innerHTML = '<option value="">Aguardando...</option>';
        selects.brand.disabled = !val;
        selects.model.disabled = true;
        selects.year.disabled = true;

        if (val && vehicleData[val]) {
            Object.keys(vehicleData[val].brands).forEach(b => {
                const opt = new Option(b.toUpperCase(), b);
                selects.brand.add(opt);
            });
        }
    });

    selects.brand?.addEventListener('change', () => {
        const type = selects.type.value;
        const brand = selects.brand.value;
        selects.model.innerHTML = '<option value="">Selecione...</option>';
        selects.model.disabled = !brand;

        if (type && brand && vehicleData[type].brands[brand]) {
            vehicleData[type].brands[brand].models.forEach(m => {
                selects.model.add(new Option(m, m));
            });
        }
    });

    selects.model?.addEventListener('change', () => {
        const type = selects.type.value;
        const brand = selects.brand.value;
        selects.year.innerHTML = '<option value="">Selecione...</option>';
        selects.year.disabled = !selects.model.value;

        if (type && brand && vehicleData[type].brands[brand]) {
            vehicleData[type].brands[brand].years.forEach(y => {
                selects.year.add(new Option(y, y));
            });
        }
    });

    // Carousel with Dots
    const carousel = document.getElementById('main-carousel');
    if (carousel) {
        const images = carousel.querySelectorAll('.carousel-inner img');
        const dots = carousel.querySelectorAll('.dot');
        let current = 0;

        function show(idx) {
            images.forEach(img => img.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            images[idx].classList.add('active');
            dots[idx].classList.add('active');
            current = idx;
        }

        carousel.querySelector('.prev')?.addEventListener('click', () => {
            let idx = (current - 1 + images.length) % images.length;
            show(idx);
        });

        carousel.querySelector('.next')?.addEventListener('click', () => {
            let idx = (current + 1) % images.length;
            show(idx);
        });

        dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
        
        setInterval(() => {
            let idx = (current + 1) % images.length;
            show(idx);
        }, 4000);
    }

    // Comparison Slider
    const slider = document.getElementById('comparison-slider');
    if (slider) {
        const before = slider.querySelector('.before-img');
        const handle = slider.querySelector('.slider-handle');

        const move = (e) => {
            const rect = slider.getBoundingClientRect();
            const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
            let pos = ((pageX - rect.left) / rect.width) * 100;
            pos = Math.max(0, Math.min(100, pos));
            before.style.width = `${pos}%`;
            handle.style.left = `${pos}%`;
        };

        slider.addEventListener('mousemove', move);
        slider.addEventListener('touchmove', move);
    }

    // FAQ Accordion
    document.querySelectorAll('.faq-header').forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const isOpen = content.style.maxHeight;
            document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
            if (!isOpen) content.style.maxHeight = content.scrollHeight + "px";
        });
    });

    // Countdown Timer (Sticky & Final CTA)
    function startTimer() {
        let seconds = 13 * 3600 + 24 * 60 + 2;
        const display = document.getElementById('sticky-timer');

        setInterval(() => {
            if (seconds <= 0) return;
            seconds--;
            const h = Math.floor(seconds / 3600);
            const m = Math.floor((seconds % 3600) / 60);
            const s = seconds % 60;
            const timeStr = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
            if (display) display.innerText = timeStr;
        }, 1000);
    }
    startTimer();

    // Video Reviews Play
    document.querySelectorAll('.video-box').forEach(box => {
        const video = box.querySelector('video');
        box.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                box.querySelector('.play-btn').style.display = 'none';
            } else {
                video.pause();
                box.querySelector('.play-btn').style.display = 'flex';
            }
        });
    });
});
