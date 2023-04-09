const serverStats = () => {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page != 'projects.html') return

    var maxPlayers;
    var onlinePlayers;
    var status;
    var hostname;

    const ipText = document.querySelector('.projects-featured__banner-info-p');
    const statusText = document.querySelectorAll('.projects-featured__banner-stats-status');
    const playersText = document.querySelector('.projects-featured__banner-stats-players');
    
    $.getJSON("https://api.mcsrvstat.us/2/hypixel.net",
        function (data) {
            maxPlayers = data.players.max;
            onlinePlayers = data.players.online;
            status = data.online;
            hostname = data.hostname;

            $(ipText).html(hostname);
            
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