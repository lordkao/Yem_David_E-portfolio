const imgDefault = document.getElementById('img-default')
/*const alertMessage = document.getElementById('message-alert')*/
const htmlCss = document.getElementById('html-css')
const sass = document.getElementById('sass')
const bootstrap = document.getElementById('bootstrap5')
const mysql = document.getElementById('mysql2')
const expressMongo = document.getElementById('express-mongodb')
const js = document.getElementById('javascript')
const infos = document.getElementById('infos')
/*Boutons*/
const btnHtmlCss = document.getElementById('btn-html-css')
const btnSass = document.getElementById('btn-sass')
const btnBootstrap = document.getElementById('btn-bootstrap')
const btnMysql = document.getElementById('btn-mysql')
/*const btnAlertMessage = document.getElementById('btn-alert')*/
const btnMongo = document.getElementById('btn-mongodb')
const btnJs = document.getElementById('btn-js')
const btnInfos = document.getElementById('btn-infos')
const btnCloseInfos = document.getElementById('btn-close')

btnInfos.addEventListener('click',function(e){/*boutons pour afficher les coordonnées*/
    e.preventDefault()
    infos.style.display = 'flex'
    btnCloseInfos.addEventListener('click',function(){
        infos.style.display = 'none'
    })
})

let headerHeight = document.getElementById('header').getBoundingClientRect().height/*taille du header*/

function displayNone(value){/*Désactive tous les blocs de compétences*/
    value.preventDefault()
    imgDefault.style.display="none"
    /*alertMessage.style.display = 'none'*/
    htmlCss.style.display ='none'
    sass.style.display = 'none'
    bootstrap.style.display = 'none'
    mysql.style.display = 'none'
    expressMongo.style.display = 'none'
    js.style.display = 'none'
}
function boutonSkills(e,value1){/*Active un bloc de compétence ou le desactive si celui-ci est déjà actif*/
    if(value1.style.display == 'flex'){
        displayNone(e)
        imgDefault.style.display = 'flex'
        window.scrollTo(0,0)
    }
    else{
        displayNone(e)
        value1.style.display ='flex'
    }
}
class BoutonList{/*Création d'une classe pour gérer les boutons et les évènements*/
    constructor(array){
        this.array = array
    }
    clicked(){
        this.array.forEach(elt => {
            let bouton = elt.bouton
            let skill = elt.skill
            bouton.addEventListener('click',function(e){
                let pos = () => { /*calcul pour obtenir la valeur à scroll jusqu'à atteindre l'élément*/
                    let value = skill.offsetTop +headerHeight
                    return value
                }
                boutonSkills(e,skill)
                window.scrollTo(0,pos())
            })
        });
    }
}
const boutonList = new BoutonList([
    { bouton: btnHtmlCss, skill: htmlCss},
    { bouton: btnSass, skill: sass},
    { bouton: btnBootstrap, skill: bootstrap},
    { bouton: btnMysql, skill: mysql},
    { bouton: btnMongo, skill: expressMongo},
    { bouton : btnJs, skill: js}
])
boutonList.clicked()