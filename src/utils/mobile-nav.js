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
            document.body.style.overflow = 'hidden';
            mobileNav.style.display = 'flex';
            mobileNav.style.animation = 'slideInLeft 0.5s'
        } 
        else 
        {
            mobileNav.style.animation = 'slideOutRight 0.5s'
            mobileNav.addEventListener('animationend', (e) => {
                if (e.animationName === 'slideOutRight') {
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