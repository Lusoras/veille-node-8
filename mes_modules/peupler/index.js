"use script";
const tableau = require("./tableau.js");

console.log(tableau.tabVille);
console.log(tableau.tabDomaine);

const maxVille = tableau.tabVille.length
const maxFam = tableau.tabFam.length
const maxTell = tableau.tabTell.length
const maxDomaine = tableau.tabDomaine.length

//Fonctionne peupler

const peupler=()=>{
	console.log("ok")
	let tabPerso=[];
	let Membre;
	for (var i = 0; i < 10; i++) {
	
	let position=Math.floor(Math.random()*maxDomaine)
	let domaine = tableau.tabDomaine[position]

	 position=Math.floor(Math.random()*maxVille)
	let ville=tableau.tabVille[position]

	 position=Math.floor(Math.random()*maxTell)
	let tell = tableau.tabTell[position]

	 position=Math.floor(Math.random()*maxFam)
	let fam = tableau.tabFam[position]
	
	Membre={
		"Prenom":ville,
		"Nom":fam,
		"Telephone":tell,
		"Courriel":domaine		
	}

	tabPerso.push(Membre);
}
return tabPerso
}

module.exports = peupler