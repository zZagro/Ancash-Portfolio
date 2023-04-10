const fancyCrafting = () => {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page != 'fancy-crafting.html') return

    var textContainer = document.querySelector('.fc__description-container');
    var text = document.querySelector('.fc__description-container-description');
    var titles = document.querySelectorAll('.fc__description-title');
    
    var text1 = '1Custom Crafting GUI, Custom Recipes/Grids All Vanilla Recipes,...';
    var text2 = '2Custom Crafting GUI, Custom Recipes/Grids All Vanilla Recipes,...';
    var text3 = '3Custom Crafting GUI, Custom Recipes/Grids All Vanilla Recipes,...';
    var text4 = '4Custom Crafting GUI, Custom Recipes/Grids All Vanilla Recipes,...';

    $(text).html(text1);
    $(titles[0]).css('color', 'var(--clr-fuchsia)');

    titles.forEach((title) => {
        $(title).mouseenter(function () {
            titles.forEach((t) => {
                if (t != title) $(t).css('color', 'var(--clr-light)');
            });
            if ($(title).css('color') != 'rgb(217, 70, 239)') {
                $(title).css('color', 'var(--clr-fuchsia)');
                textContainer.style.animation = 'descriptionTextOut .15s';
                textContainer.addEventListener('animationend', (e) => {
                    if (e.animationName == 'descriptionTextOut') {
                        if (title.id == 'wifc1')
                        {
                            $(text).html(text1);
                        }
                        else if (title.id == 'wifc2')
                        {
                            $(text).html(text2);
                        }
                        else if (title.id == 'wifc3')
                        {
                            $(text).html(text3);
                        }
                        else if (title.id == 'wifc4')
                        {
                            $(text).html(text4);
                        }
                        textContainer.style.animation = 'descriptionTextIn .15s';
                        textContainer.addEventListener('animationend', (e) => {
                            if (e.animationName === 'descriptionTextIn') {
                                textContainer.style.animation = 'none';
                            }
                        });
                    }
                });
            }
        });
    });
};

export default fancyCrafting;