import characterData from './data.js'
import Character from './Character.js'

let monstersArray = ["orc", "demon", "goblin"]
const attackBtn = document.getElementById("attack-button")

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
   if(wizard.isDead){
      endGame()
   }else if(monster.isDead){
      if(monstersArray.length > 0){
         attackBtn.removeEventListener("click", attack)
            setTimeout(()=>{
                monster = getNewMonster()
                attackBtn.addEventListener("click", attack)
                render()
            },1500)
      }else {
         attackBtn.removeEventListener("click", attack)
         setTimeout(endGame, 1500)
      }
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

attackBtn.addEventListener("click", attack)

const wizard = new Character(characterData.hero)
let monster = getNewMonster()

const render = () => {
   document.getElementById('monster').innerHTML = monster.getCharacterHtml()
   document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
}

render()
