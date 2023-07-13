
import { getDicePlaceholderHtml, getDiceRollArray } from './utils.js'

function Character(data) {
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = function() {
         this.currentDiceScore = getDiceRollArray(this.diceCount)
         this.diceArray = this.currentDiceScore.map(function(num) {
            return `<div class="dice">${num}</div>`
         }).join('')
      }

    this.getCharacterHtml = function() {
       const { name, src, health, diceCount, diceArray } = this
       return `
       <div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${src}"/>
          <p class="health">health: <b> ${health} </b></p>
          <div class="dice-container">
             ${diceArray}
          </div>
       </div>  
      `} 

      this.takeDamage = function(currentDiceScore) {
         const totalAttackScore = currentDiceScore.reduce((a,b) => a + b)
         this.health -= totalAttackScore
         if(this.health<=0){
            this.isDead = true
            this.health = 0
         }
      }
   }

export default Character