const bazaarMenu = () => {
    var path = window.location.pathname;
    var page = path.split("/").pop().split(".")[0];
    if (!page.includes('bazaar')) return

    var textContainer = document.querySelector('.bz__description-container');
    var text = document.querySelector('.bz__description-container-description');
    var titles = document.querySelectorAll('.bz__description-title');
    
    var text1 = 'The Bazaar is kind of like a real stock market, with supply and demand, and everyone can take part in it. This allows for people to flip items on the Bazaar, and make money. This is like Auction House flipping, except that the items will get sold eventually when the price that you wish to pay is given.';
    var text2 = 'Flipping is the act of buying an item and then selling it for a higher price to make a profit, like getting a Carrot for 1,000 coins and then selling it for 1,500 coins, as you make a profit of 500 coins. With the Bazaar, you have to wait for the selling price to get higher than what you bought it for.';
    var text3 = 'A Buy Order signifies that a player is willing to buy a specific number of items at a specific price per unit or lower. Restrictions can be configure in the config.yml. Depending on the unit price, your Buy Order will be filled faster or slower (the higher the unit price, the faster it will be filled).';
    var text4 = 'A Sell Offer signifies that a player is willing to sell a specific number of items at a specific price per unit or more. Restrictions can be configure in the config.yml. Depending on the unit price, your Sell Offer will be filled faster or slower (the lower the unit price, the faster it will be filled).';

    var autoHeightDesc1 = getTextHeight(text1);
    var autoHeightDesc2 = getTextHeight(text2);
    var autoHeightDesc3 = getTextHeight(text3);
    var autoHeightDesc4 = getTextHeight(text4);

    titles.forEach((title) => {
        $(title).mouseenter(function () {
            $(text).css('height', '0px');
            $(title).css('color', 'var(--clr-fuchsia)');

            if (title.id == 'wib')
            {
                $(text).html(text1);

                $(text).css('height', autoHeightDesc1 + 'px');
            }
            else if (title.id == 'wif')
            {
                $(text).html(text2);

                $(text).css('height', autoHeightDesc2 + 'px');
            }
            else if (title.id == 'bo')
            {
                $(text).html(text3);

                $(text).css('height', autoHeightDesc3 + 'px');
            }
            else if (title.id == 'so')
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

    //Features

    var featuresText = document.querySelector('.bz__features-title');
    var featuresUl = document.querySelector('.bz__features-list');
    var features = document.querySelector('.bz__features-container');

    var autoHeight = $(featuresUl).css('height', 'auto').height();
    $(featuresUl).css('height', '0px');

    $(features).mouseenter(function () {
        $(featuresUl).css('height', autoHeight + 'px');

        $(featuresText).css('text-shadow', '2px 3px 10px rgba(34, 211, 238, 0.2), 2px 2px 5px rgba(34, 211, 238, 0.2)');
    });

    $(features).mouseleave(function () {
        $(featuresUl).css('height', '0px');
        $(featuresText).css('text-shadow', '2px 3px 10px rgba(34, 211, 238, 0), 2px 2px 5px rgba(34, 211, 238, 0)');
    });
};

export default bazaarMenu;