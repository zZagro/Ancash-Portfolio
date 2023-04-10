const serverStats = () => {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page != 'projects.html') return

    var maxPlayers;
    var onlinePlayers;
    var status;

    const statusText = document.querySelectorAll('.projects-featured__banner-stats-status');
    const playersText = document.querySelector('.projects-featured__banner-stats-players');

    $.getJSON("https://mcapi.us/server/status?ip=denzo.algoholics.eu",
        function (data) {
            console.log(data);
            maxPlayers = data.players.max;
            onlinePlayers = data.players.now;
            status = data.online;

            if (status)
            {
                $(statusText[1]).html('Online');
                $(statusText[1]).css('color', 'green');
            }
            else
            {
                $(statusText[1]).html('Offline');
                $(statusText[1]).css('color', 'red');
            }

            $(playersText).html('<strong>Players</strong>: ' + onlinePlayers + '/' + maxPlayers);
        },
    );
};

export default serverStats;