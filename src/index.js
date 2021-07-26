const imgDefault = document.getElementById('img-default')
const alertMessage = document.getElementById('message-alert')
const htmlCss = document.getElementById('html-css')
const sass = document.getElementById('sass')
const bootstrap = document.getElementById('bootstrap5')
const mysql = document.getElementById('mysql2')

/*Boutons*/
const btnHtmlCss = document.getElementById('btn-html-css')
const btnSass = document.getElementById('btn-sass')
const btnBootstrap = document.getElementById('btn-bootstrap')
const btnMysql = document.getElementById('btn-mysql')
const btnAlertMessage = document.getElementById('btn-alert')
        
function displayNone(value){
    value.preventDefault()
    imgDefault.style.display="none"
    alertMessage.style.display = 'none'
    htmlCss.style.display ='none'
    sass.style.display = 'none'
    bootstrap.style.display = 'none'
    mysql.style.display = 'none'
}
function boutonSkills(e,value1){
    if(value1.style.display == 'flex'){
        displayNone(e)
        imgDefault.style.display = 'flex'
    }
    else{
        displayNone(e)
        value1.style.display ='flex'
    }
}
class BoutonList{
    constructor(array){
        this.array = array
    }
    clicked(){
        this.array.forEach(elt => {
            let bouton = elt.bouton
            let skill = elt.skill
            bouton.addEventListener('click',function(e){
                boutonSkills(e,skill)
                window.scrollTo(0,skill.offsetTop)
            })
        });
    }
}
const boutonList = new BoutonList([
    { bouton: btnHtmlCss, skill: htmlCss},
    { bouton: btnSass, skill: sass},
    { bouton: btnBootstrap, skill: bootstrap},
    { bouton: btnMysql, skill: mysql}
])
boutonList.clicked()