const bazaarMenu = () => {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page != 'bazaar.html') return

    var textContainer = document.querySelector('.bz__description-container');
    var text = document.querySelector('.bz__description-container-description');
    var titles = document.querySelectorAll('.bz__description-title');
    
    var text1 = 'The Bazaar is kind of like a real stock market, with supply and demand, and everyone can take part in it. This allows for people to flip items on the Bazaar, and make money. This is like Auction House flipping, except that the items will get sold eventually when the price that you wish to pay is given.';
    var text2 = 'Flipping is the act of buying an item and then selling it for a higher price to make a profit, like getting a Carrot for 1,000 coins and then selling it for 1,500 coins, as you make a profit of 500 coins. With the Bazaar, you have to wait for the selling price to get higher than what you bought it for.';
    var text3 = 'A Buy Order signifies that a player is willing to buy a specific number of items at a specific price per unit or lower. Restrictions can be configure in the config.yml. Depending on the unit price, your Buy Order will be filled faster or slower (the higher the unit price, the faster it will be filled).';
    var text4 = 'A Sell Offer signifies that a player is willing to sell a specific number of items at a specific price per unit or more. Restrictions can be configure in the config.yml. Depending on the unit price, your Sell Offer will be filled faster or slower (the lower the unit price, the faster it will be filled).';

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
                        if (title.id == 'wib')
                        {
                            $(text).html(text1);
                        }
                        else if (title.id == 'wif')
                        {
                            $(text).html(text2);
                        }
                        else if (title.id == 'bo')
                        {
                            $(text).html(text3);
                        }
                        else if (title.id == 'so')
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

    //Features

    var featuresText = document.querySelector('.bz__features-title');
    var featuresUl = document.querySelector('.bz__features-list');
    var features = document.querySelector('.bz__features-container');

    $(features).mouseenter(function () {
        var lineHeight = $(featuresUl).css('line-height');

        if ($(document).width() >= 768)
        {
            $(featuresUl).css('height', 'calc(calc(' + lineHeight + ' * 10) + calc(0.2rem * 10))');
        }
        else if ($(document).width() >= 425)
        {
            $(featuresUl).css('height', 'calc(calc(' + lineHeight + ' * 12) + calc(0.2rem * 10))');
        }
        else
        {
            $(featuresUl).css('height', 'calc(calc(' + lineHeight + ' * 15) + calc(0.2rem * 10))');
        }

        $(featuresText).css('text-shadow', '2px 3px 10px rgba(34, 211, 238, 0.2), 2px 2px 5px rgba(34, 211, 238, 0.2)');
    });

    $(features).mouseleave(function () {
        $(featuresUl).css('height', '0px');
        $(featuresText).css('text-shadow', '2px 3px 10px rgba(34, 211, 238, 0), 2px 2px 5px rgba(34, 211, 238, 0)');
    });
};

export default bazaarMenu;