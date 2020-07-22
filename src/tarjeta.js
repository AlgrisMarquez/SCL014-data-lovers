// traemos la data ya depurada
import datos from './data.js';

window.onload = function cambiar() {

    const pageURL = window.location.search;
    // eliminemos la informacion de mas que hay en la data que traemos
    const champname = pageURL.replace('?', '').replace('%20', ' ').replace('%27', "'");
    //devuelve el elemento que tiene el atributo ID con el valor especificado.
    const pic = document.getElementById('foto');
    const labelName = document.getElementById('name1');
    const labelTitle = document.getElementById('title1')
    const labelblurb = document.getElementById('blurb1')
    const labelinfo = document.getElementById('info1')

    // traemos la data ya depurada por campeones
    const hero = datos.givemeThechampion(champname);
    // funcion que permite el cambio de los skills de manera aleatoria
    //función devuelve el valor entero redondeado de la variable y retorna un numero aleatoria hasta (4)
    let number = Math.floor(Math.random() * Math.floor(4));
    pic.src = hero.splash.replace("0.jpg", number + ".jpg");
    labelName.innerText = hero.name;
    labelTitle.innerText = hero.title;
    labelblurb.innerHTML = hero.blurb;
    const astats = '<h2>Attack: ' + hero.info.attack + '</h2>';
    const dstats = '<br><h2>Defense: ' + hero.info.defense + '</h2>';
    const mstats = '<br><h2>Magic: ' + hero.info.magic + '</h2>';
    const difstats = '<br><h2>Difficulty: ' + hero.info.difficulty + '</h2>';
    labelinfo.innerHTML = astats + dstats + mstats + difstats;

    //Flecha para retornar a la primera pagina
    const back = document.getElementById('arrow');
    back.style.visibility = 'visible';

}