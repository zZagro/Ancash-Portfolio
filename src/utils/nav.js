const nav = () => {
    const plugins = document.querySelector('.header__plugins');
    const dropdown = document.querySelector('.header__plugins-dropdown');

    if (dropdown.style.opacity != '0' && $(document).width() >= 768)
    {
        $(plugins).css('padding-bottom', 'var(--size-sm)');
    }
};

export default nav;