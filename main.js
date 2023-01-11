
/*header nav*/

var nav = document.getElementById("maNav");
var btnOuvert = document.getElementById("btnOuvert");
var btnFerme = document.getElementById("btnFerme");

btnOuvert.onclick = openNav;
btnFerme.onclick = closeNav;

/* ouvrir la nav*/
function openNav() {
  nav.classList.add("active");
}

/* fermer la nav*/
function closeNav() {
  nav.classList.remove("active");
}

