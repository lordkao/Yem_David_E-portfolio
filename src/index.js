const imgDefault = document.getElementById('img-default')
const alertMessage = document.getElementById('message-alert')
const htmlCss = document.getElementById('html-css')

/*Boutons*/
const btnHtmlCss = document.getElementById('btn-html-css')
const btnAlertMessage = document.getElementById('btn-alert')

btnAlertMessage.addEventListener('click',function(){/*bouton close du message alerte*/
    imgDefault.style.display = 'flex'
})

btnHtmlCss.addEventListener('click',function(e){/*bouton html5/css3*/
    e.preventDefault()
    imgDefault.style.display = 'none'
    alertMessage.style.display = 'none'
    htmlCss.style.display ='flex'
})

