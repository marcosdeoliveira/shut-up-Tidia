// atenticação a cada cinco minutos
const autenticationInterval = 1000*60*5

const autenticationTimer = setInterval( () => {

        if (!(document.getElementById('timeout_alert_body') == null)) {
            let timeToResponse = setTimeout( () => {
                try {
                    keep_session_alive();
                    console.log('Bomb has been defused!');
                }
                catch (e) {
                    console.log('Need backup');
                    console.log('I\'m hit! Need assistance!');
                    console.log(e);
                }
            }, 5000);
        }
        else
            console.log('sector clear!');
    }, autenticationInterval)