// show modifie la propriété en faisant appel au css

$(document).ready(function() {
$('#text').show();

});

/* DEUXIEME SOLUTION POUR FAIRE APPARAITRE LE PARAGRAPHE
EN MODIFIANT LA STRUCTURE DU DOC (LE DOM)

.removeAttr = permet de supprimer les attributs ex: ALT, CLASS, SRC...

$("#text").removeAttr("hidden"); 

*/
