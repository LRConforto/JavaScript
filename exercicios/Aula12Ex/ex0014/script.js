function carregar () { 

var msg = document.getElementById('msg');
var foto = document.getElementsByTagName('img')[0];
var agora = new Date ();
var hora = agora.getHours(); 



if (hora >= 6 && hora < 12) { 

    msg.innerHTML = `<p>${hora} hora(s) da Manhã`
    foto.src = "manha.jpg"
    document.body.style.backgroundColor = ''

} else if (hora < 6 || hora >= 18) {

    msg.innerHTML = `<p>${hora} hora(s) da Noite`
    foto.src = "noite.jpg"
    document.body.style.backgroundColor = 'rgba(39, 48, 161, 0.959)'


 } else { 

    msg.innerHTML = `<p>${hora} hora(s) da Tarde`
    foto.src = "tarde.jpg"
    document.body.style.backgroundColor = 'rgba(247, 191, 118, 0.88)'


 }

}

window.addEventListener('DOMContentLoaded', carregar);
