# Challenges from the Scrimba site
## Part One
1. Take the hard-coded HTML for the Wizard card, bring it into index.js and then inject it back into its div with JavaScript.
2. Do the same for Orc card. 
3. Strip out the hero and monster data (element id, name, avatar, health and dice score) and store them in variables
    - Write a renderCharacter() function that accepts the 5 new variables as paramaters and renders out a character with this data
    - Call renderCharacter() twice. Once with the hero variables and once with the monster variables to that both are rendered
4. Update the renderCharacter() function so that it accepts a single object "data" as its parameter instead of five string/numbers, reducing the number of arguments to pass in from five to one.
    - Update the template now each variable is coming from "data"
    - Update the function call.
5. Deconstruct the object
6. Declare a let called diceHtml and initialize it with an empty string. 
    - Use a for loop to update diceHtml so that it contains the HTML for our dice. The number of dice needed is specificed in the diceCount property of the objects.
    - Each dice should have the following HTML: <div class="dice">6</div>
    - For now, each dice will display 6
    - Swap out the diceRoll variable for diceHtml in the template
7. Have the dice count reflect the array 
8. Create a function called getDiceRollArray that uses a for loop to return an array of random numbers between 1-6.
    - The function should have diceCount as a parameter and the array it returns should be diceCount length. 
    - For testing purposes, call the function with a diceCount of 3 and log out the result. 
9. Create a function called getDiceHtml. 
    - getDiceHtml should map over the array of dice rolls returned from getDiceRollArray to generate the html we need to render our dice with random values. This is the HTML: `<div class="dice">DICE VALUE HERE</div>`
    - Think about the parameters and arguments!
    - Down in renderCharacter(), set diceHtml equals to our new getDiceHtml function. Remember to give it the argument it needs. 
    - Delete any code we no longer need.
10.  Instead of the for loop, use an Array constructor to create a new array which is diceCount length.
    - Fill the new array with zeros as its initial state
    - Map over the new array directly (no need to declare a new variable) and return a random number from 1-6 in each element.
    -  Delete all unnecessary code.
PART ONE COMPLETE

## Part Two: 
1. Create a new constructor function called Character which takes our data as a paramenter.
    - Set up "this" for each of the 5 properties in our objects (eg: this.health = data.health).
2. Create a method called getCharacterHtml that performs the same tasks as our current renderCharacter function.
    - Create two new instances of Character. One for a hero, called "wizard", and one for a monster, called "orc". Render both of them on the page.
    - Delete both the old renderCharacter function and the two lines of code at the bottom of the page which invoke that function.
3. Use Object.assign to refactor the Constructor code  
4. Move getDiceHtml to the constructor as a method
    - Instead of setting the innerHTML from right here in the contructor,make it so that we just return that literal string of HTML
    - This will break the app. Don't worry!
    - Now fix the issue
    - Create a render() function to consolidate calling document.innerHTML
5. Create a new const called characterData and set it equals to an object which holds both our hero and monster objects
    - Think about how we access the data from our new object when we set up new characters down at the very bottom of the app. 
    - See if you can work out what needs to change there to keep the app working.
6. Add separate files to split up all of the code. 