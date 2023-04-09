const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
    const pluginLink = document.querySelector('.mobile-nav__plugins');

    let isMobileNavOpen = false;

    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;

        if (isMobileNavOpen)
        {
            mobileNav.style.display = 'flex';
            mobileNav.style.animation = 'slideInLeft 1s'
            document.body.style.overflow = 'hidden';
        } 
        else 
        {
            mobileNav.style.animation = 'slideOutLeft 1s'
            mobileNav.addEventListener('animationend', (e) => {
                if (e.animationName === 'slideOutLeft') {
                    mobileNav.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (link != pluginLink) {
                isMobileNavOpen = false;
                mobileNav.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
};

export default mobileNav;