//Hero object
const hero = {
   id: "hero",
   name: "Wizard",
   src: "images/wizard.png",
   health: 60,
   diceCount: 3
}

//Monster object
const monster = {
   id: "monster",
   name: "Orc",
   src: "images/orc.png",
   health: 10,
   diceCount: 1
}

function getDiceRollArray(count) {
   return new Array(count).fill(0).map(function(){
      return Math.floor(Math.random() * 6) + 1
   })
}

function getDiceHtml(count) {
   return getDiceRollArray(count).map(function(num){
      return `<div class="dice">${num}</div>`
   }).join(" ")
}

function renderCharacter(data) {
   const { id, name, src, health, diceCount } = data
   
   const diceHtml = getDiceHtml(diceCount)
   

   return document.getElementById(id).innerHTML = `
   <div class="character-card">
      <h4 class="name"> ${name} </h4>
      <img class="avatar" src="${src}"/>
      <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container">
         ${diceHtml}
      </div>
   </div>  
`
}

//Render the hero and orc card html through JavaScript instead of hard coding in HTML
renderCharacter(hero)
renderCharacter(monster)
