// atenticação a cada dez minutos
const autenticationInterval = 1000*60*10

const autenticationTimer = setInterval( () => {

        if (!(document.getElementById('timeout_alert_body') == null)) {
            let timeToResponse = setTimeout( () => {
                try {
                    keep_session_alive();
                    // console.log('autenticação renovada');
                }
                catch (e) {
                    console.log('algo deu errado');
                }
            }, 5000);
        }
        // else
            // console.log('bored to death');
    }, autenticationInterval)