const imgDefault = document.getElementById('img-default')
const alertMessage = document.getElementById('message-alert')
const htmlCss = document.getElementById('html-css')

/*Boutons*/
const btnHtmlCss = document.getElementById('btn-html-css')
const btnAlertMessage = document.getElementById('btn-alert')

btnAlertMessage.addEventListener('click',function(){
    imgDefault.style.display = 'flex'
})

btnHtmlCss.addEventListener('click',function(e){
    e.preventDefault()
    imgDefault.style.display = 'none'
    alertMessage.style.display = 'none'
    htmlCss.style.display ='flex'
})

