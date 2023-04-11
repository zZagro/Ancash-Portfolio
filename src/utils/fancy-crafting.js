const fancyCrafting = () => {
    var path = window.location.pathname;
    var page = path.split("/").pop().split(".")[0];
    if (!page.includes('fancy-crafting')) return

    var textContainer = document.querySelector('.fc__description-container');
    var text = document.querySelector('.fc__description-container-description');
    var titles = document.querySelectorAll('.fc__description-title');
    
    var text1 = '1Custom Crafting GUI, Custom Recipes/Grids All Vanilla Recipes,...';
    var text2 = '2Custom Crafting GUI, Custom Recipes/Grids All Vanilla Recipes,...';
    var text3 = '3Custom Crafting GUI, Custom Recipes/Grids All Vanilla Recipes,...';
    var text4 = '4Custom Crafting GUI, Custom Recipes/Grids All Vanilla Recipes,...';

    var autoHeightDesc1 = getTextHeight(text1);
    var autoHeightDesc2 = getTextHeight(text2);
    var autoHeightDesc3 = getTextHeight(text3);
    var autoHeightDesc4 = getTextHeight(text4);

    var autoHeight;

    titles.forEach((title) => {
        $(title).mouseenter(function () {
            $(text).css('height', '0px');
            $(title).css('color', 'var(--clr-fuchsia)');

            if (title.id == 'wifc1')
            {
                $(text).html(text1);

                $(text).css('height', autoHeightDesc1 + 'px');
            }
            else if (title.id == 'wifc2')
            {
                $(text).html(text2);

                $(text).css('height', autoHeightDesc2 + 'px');
            }
            else if (title.id == 'wifc3')
            {
                $(text).html(text3);

                $(text).css('height', autoHeightDesc3 + 'px');
            }
            else if (title.id == 'wifc4')
            {
                $(text).html(text4);

                $(text).css('height', autoHeightDesc4 + 'px');
            }
        });

        $(title).mouseleave(function (e) { 
            $(title).css('color', 'var(--clr-light)');
            $(text).css('height', '0px');
        });
    });

    function getTextHeight(input)
    {
        $(text).html(input);
        var output = $(text).css('height', 'auto').height();
        $(text).css('height', '0px');
        return output;
    }
};

export default fancyCrafting;