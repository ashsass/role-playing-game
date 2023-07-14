import characterData from './data.js'
import Character from './Character.js'

let monstersArray = ["orc", "demon", "goblin"]

const getNewMonster = () => {
   const nextMonsterData = characterData[monstersArray.shift()]
   return nextMonsterData ? new Character(nextMonsterData) : {}
}

const attack = () => {
   monster.getDiceHtml()
   wizard.getDiceHtml()
   monster.takeDamage(wizard.currentDiceScore)
   wizard.takeDamage(monster.currentDiceScore)
   render()
   if(monster.isDead){
      monster = getNewMonster()
      render()
   }
}

const endGame = () => {
   const endMessage = monster.isDead && wizard.isDead ? "No victors - all creatures are dead" : wizard.isDead ? `The ${monster.name} is Victorious` : 'The Wizard Wins'

   const endEmoji = wizard.health > 0 ? "🔮" : "☠️"

   document.body.innerHTML = 
      `<div class="end-game">
         <h2>Game Over</h2>
         <h3>${endMessage}</h3>
         <p class="end-emoji">${endEmoji}</p>
      </div>`
}

document.getElementById("attack-button").addEventListener("click", attack)

const wizard = new Character(characterData.hero)
let monster = getNewMonster()

const render = () => {
   document.getElementById('monster').innerHTML = monster.getCharacterHtml()
   document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
}

render()
