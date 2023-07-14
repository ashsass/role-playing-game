
import { getDicePlaceholderHtml, getDiceRollArray, getPercentage } from './utils.js'

function Character(data) {
    Object.assign(this, data)

    this.maxHealth = this.health

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = () => {
         this.currentDiceScore = getDiceRollArray(this.diceCount)
         this.diceArray = this.currentDiceScore.map(num => `<div class="dice">${num}</div>`).join('')
      }

      this.getHealthBarHtml = () => {
         const percent = getPercentage(this.health, this.maxHealth)
         return `<div class="health-bar-outer">
                     <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
                        style="width: ${percent}%;">
                     </div>
                  </div>`
      }

      this.getCharacterHtml = () => {
         const healthBar = this.getHealthBarHtml()
         const { name, src, health, diceArray } = this
         return `
         <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${src}"/>
            <p class="health">health: <b> ${health} </b></p>
            ${healthBar}
            <div class="dice-container">
               ${diceArray}
            </div>
         </div>  
        `} 

      this.takeDamage = currentDiceScore => {
         const totalAttackScore = currentDiceScore.reduce((a,b) => a + b)
         this.health -= totalAttackScore
         if(this.health<=0){
            this.isDead = true
            this.health = 0
         }
         getPercentage(this.health, this.maxHealth)
      }
}

export default Character