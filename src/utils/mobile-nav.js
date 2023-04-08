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
            mobileNav.style.transform = 'translateX(0%)'
            document.body.style.overflowY = 'hidden';
        } 
        else 
        {
            mobileNav.style.display = 'none';
            mobileNav.style.transform = 'translateX(100%)'
            document.body.style.overflowY = 'auto';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (link != pluginLink) {
                isMobileNavOpen = false;
                mobileNav.style.display = 'none';
                mobileNav.style.transform = 'translateX(100%)'
                document.body.style.overflowY = 'auto';
            }
        });
    });
};

export default mobileNav;