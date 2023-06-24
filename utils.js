export function getDiceRollArray(count) {
    return new Array(count).fill(0).map(function(){
       return Math.floor(Math.random() * 6) + 1
    })
 }