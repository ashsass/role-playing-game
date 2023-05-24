//Hero object
const hero = {
   id: "hero",
   name: "Wizard",
   src: "images/wizard.png",
   health: 60,
   diceScore: 6
}

//Monster object
const monster = {
   id: "monster",
   name: "Orc",
   src: "images/orc.png",
   health: 10,
   diceScore: 4
}

function renderCharacter(data) {
   return document.getElementById(data.id).innerHTML = `
   <div class="character-card">
      <h4 class="name"> ${data.name} </h4>
      <img class="avatar" src="${data.src}"/>
      <p class="health">health: <b> ${data.health} </b></p>
      <div class="dice-container">
         <div class="dice"> ${data.diceScore} </div>
      </div>
   </div>  
`
}

//Render the hero and orc card html through JavaScript instead of hard coding in HTML
renderCharacter(hero)
renderCharacter(monster)
