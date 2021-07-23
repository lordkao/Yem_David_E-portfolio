const imgDefault = document.getElementById('img-default')
const alertMessage = document.getElementById('message-alert')
const htmlCss = document.getElementById('html-css')
const sass = document.getElementById('sass')
const bootstrap = document.getElementById('bootstrap5')

/*Boutons*/
const btnHtmlCss = document.getElementById('btn-html-css')
const btnSass = document.getElementById('btn-sass')
const btnBootstrap = document.getElementById('btn-bootstrap')
const btnAlertMessage = document.getElementById('btn-alert')

function displayNone(){
    imgDefault.style.display = 'none'
    alertMessage.style.display = 'none'
    htmlCss.style.display ='none'
    sass.style.display = 'none'
    bootstrap.style.display = 'none'
}

btnAlertMessage.addEventListener('click',function(){/*bouton close du message alerte*/
    imgDefault.style.display = 'flex'
})
btnHtmlCss.addEventListener('click',function(e){/*bouton html5/css3*/
    e.preventDefault()
    displayNone()
    htmlCss.style.display ='flex'
})
btnSass.addEventListener('click',function(e){
    e.preventDefault()
    displayNone()
    sass.style.display = 'flex'
})
btnBootstrap.addEventListener('click',function(e){
    e.preventDefault()
    displayNone()
    bootstrap.style.display = 'flex'
})

