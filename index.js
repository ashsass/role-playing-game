//Hero object
const hero = {
   id: "hero",
   name: "Wizard",
   src: "images/wizard.png",
   health: 60,
   diceScore: [3, 1, 4],
   diceCount: 3
}

//Monster object
const monster = {
   id: "monster",
   name: "Orc",
   src: "images/orc.png",
   health: 10,
   diceScore: [2],
   diceCount: 1
}

function renderCharacter(data) {
   const { id, name, src, health, diceScore, diceCount } = data;
   let diceHtml = "";

   for(let i = 0; i < diceCount; i++) {
      diceHtml += `
         <div class="dice"> ${diceScore} </div>
      `
   }
   

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
