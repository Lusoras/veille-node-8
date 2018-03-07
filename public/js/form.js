 let elmSauver = document.querySelectorAll('.sauver')
 console.log('elmSauver = ' + elmSauver.length)
 for (elm of elmSauver)
 {
 elm.addEventListener('click', function(){
 /* 
 console.log(this
 .parentNode
 .parentNode
 .children[1].innerHTML)
 */
 let laLigne = this.parentNode.parentNode
 console.log(laLigne);
 let id = laLigne.children[0].innerHTML
 let nom = laLigne.children[1].innerHTML
 let prenom = laLigne.children[2].innerHTML
 let telephone = laLigne.children[3].innerHTML

let elmForm = document.getElementById('mon_formulaire')
 console.log(elmForm.tagName)
 let elmInput = elmForm.querySelectorAll('input')
 elmInput[0].value = id
 elmInput[1].value = nom
 elmInput[2].value = prenom
 elmInput[3].value = telephone

elmForm.submit()

 })
 } 


