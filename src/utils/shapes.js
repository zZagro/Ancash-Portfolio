const shapes = () => {
    const shapes = document.querySelector('.shapes');
    const addShapes = Math.floor(Math.random() * 3);
    console.log(addShapes);
    for (let j = 0; j < addShapes; j++)
    {
        $(shapes).append('<span class="shapes__circle"></span>');
    }

    const plugins = document.querySelectorAll('.shapes__circle');
    const colors = ['--clr-fuchsia', '--clr-cyan400', '--clr-cyan600', '--clr-cyan800'];

    for (let i = 0; i < plugins.length; i++) 
    {
        var item = colors[Math.floor(Math.random() * colors.length)];
        $(plugins[i]).css('border-color', 'var(' + item + ')');

        var top = Math.floor(Math.random() * 100);
        var left = Math.floor(Math.random() * 100);
        $(plugins[i]).css('top', top + 'svh');
        $(plugins[i]).css('left', left + 'svw');
    }
};

export default shapes;