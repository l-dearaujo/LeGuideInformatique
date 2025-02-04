$(document).ready(function(){
    var typed = new Typed(".texte", {
        strings: ["Ce fil est en phase de test, tout ce que vous écrivez n'est pas enregistré !"],
        typeSpeed: 20,
        backSpeed: 50,
        loop: true
    });
});

function boxagrandir(element) {
    element.style.boxShadow = "6px 6px 50px";
}

function boxagrandir2(element) {
    element.style.boxShadow = "0px 0px 0px";
}

function boxretrecir(element) {
    element.style.boxShadow = "6px 6px 25px #a09e9e";
}

function background(element) {
    element.style.backgroundColor = "#b6c9cc";
}

function backgroundback(element) {
    element.style.backgroundColor = "initial";
    if (element.id === "nav-active") {
        element.style.backgroundColor = "#85C1E9";}
}

function imageagrandir(element) {
    element.style.width = "600px";
}

function imageretrecir(element) {
    element.style.width = "initial";
}

function confirmation(element) {
    element.textContent="Ok !";
    element.style.backgroundColor="#6BEF04";
    setTimeout(buttonrst, 2000);
}

function buttonrst(){
    document.getElementById("name").value="";
    document.getElementById("mail").value="";
    document.getElementById("msg").value="";
    document.getElementById("ok").textContent="Envoyez le message";
    document.getElementById("ok").style.backgroundColor="#85C1E9";
}

function fac(){
    const element = document.getElementById("h3")
    const affichage = document.getElementById("rsaffichage")
    if (element.value = ""){
        element.innerText = 'Facebook'
        affichage.style.paddingTop = "5px"
        affichage.style.paddingBottom = "5px"
    }
    else
        element.innerText = ""
        element.innerText = "Facebook"
        affichage.style.paddingTop = "5px"
        affichage.style.paddingBottom = "5px"
    const identifiant = document.getElementById("p")
    element.style.color = "color-mix(in srgb, #0165E1 50%, #17A9FD 50%)"
    if (identifiant.value = ""){
        identifiant.innerText = 'leguideinformatique_off'
    }
    else
        identifiant.innerText = ""
        identifiant.innerText = "leguideinformatique_off"
}

function insta(){
    const element = document.getElementById("h3")
    const affichage = document.getElementById("rsaffichage")
    if (element.value = ""){
        element.innerText = 'Instagram'
        affichage.style.paddingTop = "5px"
        affichage.style.paddingBottom = "5px"
    }
    else
        element.innerText = ""
        element.innerText = "Instagram"
        affichage.style.paddingTop = "5px"
        affichage.style.paddingBottom = "5px"
    const identifiant = document.getElementById("p")
    element.style.color = "#C13584"
    if (identifiant.value = "")
        identifiant.innerText = 'leguideinformatique.off'
    else
        identifiant.innerText = ""
        identifiant.innerText = "leguideinformatique.off"
}

function Twitter(){
    const element = document.getElementById("h3")
    const affichage = document.getElementById("rsaffichage")
    if (element.value = ""){
        element.innerText = 'Twitter'
        affichage.style.paddingTop = "5px"
        affichage.style.paddingBottom = "5px"
    }
    else
        element.innerText = ""
        element.innerText = "Twitter"
        affichage.style.paddingTop = "5px"
        affichage.style.paddingBottom = "5px"
    const identifiant = document.getElementById("p")
    element.style.color = "#1D9BF0"
    if (identifiant.value = "")
        identifiant.innerText = '_leguideinformatique_off'
    else
        identifiant.innerText = ""
        identifiant.innerText = "_leguideinformatique_off"
}

function mail(){
    const element = document.getElementById("h3")
    const affichage = document.getElementById("rsaffichage")
    if (element.value = ""){
        element.innerText = 'E-mail de Contact'
        affichage.style.paddingTop = "5px"
        affichage.style.paddingBottom = "5px"
    }
    else
        element.innerText = ""
        element.innerText = "E-mail de Contact"
        affichage.style.paddingTop = "5px"
        affichage.style.paddingBottom = "5px"
    const identifiant = document.getElementById("p")
    element.style.color = "gray"
    if (identifiant.value = "")
        identifiant.innerText = 'contact@leguideinformatique.fr'
    else
        identifiant.innerText = ""
        identifiant.innerText = "contact@leguideinformatique.fr"
}

function rotate(element) {
    element.setAttribute("class", "rotated-texte");
  }

  function rotateback(element) {
    element.setAttribute("class", "texte");
  }

  
function alerter(){
    window.alert("Cette page n'est pas encore disponible.");

  }

function backgroungchange(element){
    element.style.backgroundColor="red"
}

function despawn(element){
    element.style.color="#00000011"
}

function respawn(element){
    element.style.color="initial"
}