const nav = () => {
    const plugins = document.querySelector('.header__plugins');
    const dropdown = document.querySelector('.header__plugins-dropdown');

    if (dropdown.style.opacity != '0')
    {
        $(plugins).css('padding-bottom', 'var(--size-xxs)');
    }
};

export default nav;