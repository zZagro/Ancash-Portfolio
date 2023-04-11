const fancyCrafting = () => {
    var path = window.location.pathname;
    var page = path.split("/").pop().split(".")[0];
    if (!page.includes('fancy-crafting')) return

    var textContainer = document.querySelector('.fc__description-container');
    var text = document.querySelector('.fc__description-container-description');
    var titles = document.querySelectorAll('.fc__description-title');
    
    var text1 = 'Fancy Crafting gives you a brand new experience when crafting items. It has a custom crafting GUI and it allows you to use it for all vanilla items and even custom items from anyone!';
    var text2 = 'Fancy Crafting lets you edit and create new recipes for existing vanilla items and custom items, even from 3rd party plugins.';
    var text3 = 'Fancy Crafting does not limit you with how big you want your crafting menu to be (you can not go bigger than the minecraft chest size though). You can be experimental with an 8x6 crafting grid or make it challenging by using a 2x2 grid. It is your choice.';
    var text4 = 'If you feel very challenging, Fancy Crafting lets you randomize vanilla minecraft recipes with just 2 clicks!';

    var autoHeightDesc1 = getTextHeight(text1);
    var autoHeightDesc2 = getTextHeight(text2);
    var autoHeightDesc3 = getTextHeight(text3);
    var autoHeightDesc4 = getTextHeight(text4);

    var autoHeight;

    titles.forEach((title) => {
        $(title).mouseenter(function () {
            $(text).css('height', '0px');
            $(title).css('color', 'var(--clr-fuchsia)');

            if (title.id == 'wifc')
            {
                $(text).html(text1);

                $(text).css('height', autoHeightDesc1 + 'px');
            }
            else if (title.id == 'ecr')
            {
                $(text).html(text2);

                $(text).css('height', autoHeightDesc2 + 'px');
            }
            else if (title.id == 'ccg')
            {
                $(text).html(text3);

                $(text).css('height', autoHeightDesc3 + 'px');
            }
            else if (title.id == 'rr')
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
        $(text).css('transition', 'all .3s');
        return output;
    }
};

export default fancyCrafting;