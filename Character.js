
import { getDicePlaceholderHtml, getDiceRollArray } from './utils.js'

function Character(data) {
    Object.assign(this, data)

    this.getDiceHtml = function(count) {
       return getDiceRollArray(count).map(function(num){
          return `<div class="dice">${num}</div>`
       }).join(" ")
      }
    this.getCharacterHtml = function() {
       const { name, src, health } = this
       const diceHtml = this.diceArray()
       return `
       <div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${src}"/>
          <p class="health">health: <b> ${health} </b></p>
          <div class="dice-container">
             ${diceHtml}
          </div>
       </div>  
      `} 
    this.diceArray = function() { 
      const { diceCount } = this
      return getDicePlaceholderHtml(diceCount).join('')
      }
   }

export default Character