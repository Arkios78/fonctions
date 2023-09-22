"use strict"
/**         Fonction
 * 
 * 
 * Declarer trois variables nom="Kader" et nomBis="Maxime" et reponse
 * 
 * Declarer une fonction checkName(qui possede 2 parametres) qui verifie si les deux noms sont identique 
 * 
 * console log la reponse
 * 
 */

let nom="Kader";
let nomBis="Maxime";
let reponse=checkName(nom,nomBis)

function checkName(nom, nomBis){
    if(nom===nomBis){
        return true
    }else{
        return false
    }
}
console.log(reponse);