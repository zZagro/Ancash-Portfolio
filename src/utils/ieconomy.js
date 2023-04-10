const ieconomy = () => {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page != 'ieconomy.html') return

    //Features

    var featuresText = document.querySelector('.econ__features-title');
    var featuresUl = document.querySelector('.econ__features-list');
    var features = document.querySelector('.econ__features-container');

    $(features).mouseenter(function () {
        var lineHeight = $(featuresUl).css('line-height');

        $(featuresUl).css('height', 'calc(calc(' + lineHeight + ' * 3) + calc(0.2rem * 10))');

        $(featuresText).css('text-shadow', '2px 3px 10px rgba(34, 211, 238, 0.2), 2px 2px 5px rgba(34, 211, 238, 0.2)');
    });

    $(features).mouseleave(function () {
        $(featuresUl).css('height', '0px');
        $(featuresText).css('text-shadow', '2px 3px 10px rgba(34, 211, 238, 0), 2px 2px 5px rgba(34, 211, 238, 0)');
    });
};

export default ieconomy;