// Fonction pour faire clignoter le texte
function clignoter() {
    var texte = document.getElementById("clignotant");

    // Alterner entre visible et invisible à chaque intervalle (par exemple, 500 millisecondes)
    setInterval(function() {
      if (texte.style.visibility === 'visible') {
        texte.style.visibility = 'hidden';
      } else {
        texte.style.visibility = 'visible';
      }
    }, 1000); // Interval en millisecondes
  }

  // Appeler la fonction clignoter au chargement de la page
  window.onload = clignoter;