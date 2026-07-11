/* Suivi de progression léger (localStorage) — partagé par toutes les pages.
   Le suivi persiste PENDANT la session (une équipe retrouve ses ✓ en
   revenant à l'accueil). La remise à zéro est MANUELLE : l'animateur
   réinitialise la tablette au début de chaque session (y compris entre
   deux demi-journées du même jour). Le bouton de réinitialisation
   s'affiche sur l'accueil dès qu'une progression est présente. */
var CR = (function(){
  var KEY = 'cyber-reflexes-progression';
  function lire(){
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch(e){ return {}; }
  }
  function ecrire(p){
    try { localStorage.setItem(KEY, JSON.stringify(p)); } catch(e){}
  }
  return {
    marquer: function(cle){ var p = lire(); p[cle] = true; ecrire(p); },
    estFait: function(cle){ return !!lire()[cle]; },
    tout: lire,
    reinitialiser: function(){ try { localStorage.removeItem(KEY); } catch(e){} }
  };
})();
