const shapes = () => {
    const plugins = document.querySelectorAll('.shapes__circle');
    const colors = ['--clr-fuchsia', '--clr-cyan400'];

    for (let i = 0; i < plugins.length; i++) 
    {
        var item = colors[Math.floor(Math.random() * colors.length)];
        $(plugins[i]).css('border-color', 'var(' + item + ')');
    }
};

export default shapes;