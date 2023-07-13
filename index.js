import characterData from './data.js'
import Character from './Character.js'

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

const render = () => {
   document.getElementById(orc.id).innerHTML = orc.getCharacterHtml()
   document.getElementById(wizard.id).innerHTML = wizard.getCharacterHtml()
}
render()

const attack = () => {
   orc.getDiceHtml()
   wizard.getDiceHtml()
   orc.takeDamage(wizard.currentDiceScore)
   wizard.takeDamage(orc.currentDiceScore)
   render()
   if(orc.isDead || wizard.isDead){
      endGame()
   }
}


const endGame = () => {
   const endMessage = orc.isDead && wizard.isDead ? "No victors - all creatures are dead" : wizard.isDead ? 'The Orc is Victorious' : 'The Wizard Wins'

   const endEmoji = wizard.health > 0 ? "🔮" : "☠️"

   document.body.innerHTML = 
      `<div class="end-game">
         <h2>Game Over</h2>
         <h3>${endMessage}</h3>
         <p class="end-emoji">${endEmoji}</p>
      </div>`
}

document.getElementById("attack-button").addEventListener("click", attack)