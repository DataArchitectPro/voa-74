(function () {
    // Mobile burger menu
    const header = document.querySelector('.header');
    const burger = document.querySelector('[data-burger]');
    const mobileNav = document.querySelector('[data-mobile-nav]');

    if (header && burger && mobileNav) {
        const closeMenu = () => {
            header.classList.remove('is-open');
            burger.setAttribute('aria-expanded', 'false');
        };

        burger.addEventListener('click', () => {
            const isOpen = header.classList.toggle('is-open');
            burger.setAttribute('aria-expanded', String(isOpen));
        });

        // Close on link click
        mobileNav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => closeMenu());
        });

        // Close on Esc
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMenu();
        });

        // Close when resizing to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 920) closeMenu();
        });
    }

    // Маска телефона (простая): +7 (___) ___-__-__
    const phone = document.querySelector('[data-phone]');
    if (phone) {
        phone.addEventListener('input', () => {
            let v = phone.value.replace(/\D/g, '');
            if (v.startsWith('8')) v = '7' + v.slice(1);
            if (!v.startsWith('7')) v = '7' + v;
            v = v.slice(0, 11);

            const p = v.padEnd(11, '_').split('');
            phone.value = `+${p[0]} (${p[1]}${p[2]}${p[3]}) ${p[4]}${p[5]}${p[6]}-${p[7]}${p[8]}-${p[9]}${p[10]}`.replace(/_+/g, '');
        });
    }

    // Фейковая отправка формы (потом заменишь на реальную интеграцию)
    document.querySelectorAll('form[data-lead-form]').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Заявка отправлена (демо). Подключим отправку в мессенджер/почту позже.');
            form.reset();
        });
    });
})();