import characterData from './data.js'
import Character from './Character.js'

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()

function render() {
   document.getElementById(orc.id).innerHTML = orc.getCharacterHtml()
   document.getElementById(wizard.id).innerHTML = wizard.getCharacterHtml()
}


function attack() {
   orc.getDiceHtml()
   wizard.getDiceHtml()
   render()
}

document.getElementById("attack-button").addEventListener("click", attack)