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

## Part Three
1. Set up a function called attack()
    - Wire up the attack button so when pressed, the function logs out 'attack button working!'
    - Do this without declaring any new variables
2. Make the attack button trigger a dice roll for both wizard and orc (which method on the constructor does that??)
    - Make sure the new dice score shows in the app
3. Create a new function called getDicePlaceholderHtml.
    - Make getDicePlaceholderHtml return a new array of diceCount length.
    - Each element of the array should include this line of HTML: `<div class="placeholder-dice"></div>`
    - Remember to deal with the commas!
    - Think: Where should this function live??
4. In the Character constructor, create a new property called "diceArray".
    - Set diceArray equal to whatever is returned by the getDicePlaceholderHtml function (think what two things you need to do to make this work!!).
    - Instead of rendering diceHtml in the getCharacterHtml method, render diceArray.
    - Delete any unnecessary code.
5. Add a new property called currentDiceScore to each character's data and initialise it to an empty array.
    - Rewrite the getDiceHtml method so it updates currentDiceScore with the values returned by getDiceRollArray.
6. In the getDiceHtml method, map over currentDiceScore to return this string of html template for each element: <div class="dice">${num}</div>`. Save this new array to diceArray.
    - Modify the attack() function in index.js to get our app working again.
7. Ceate a new method inside Character called "takeDamage"
    - For now, have the method log out the name of the damaged character and phrase "is damaged".
    - In index.js, find the attack() function and call takeDamage for each character inside that function. 
    - Think what data we need to pass to our new takeDamage method.
    - Add that data as an argument each time we call takeDamage below.
    - In the takeDamage method, take in the data as a parameter called 'attackScoreArray' and log it out.
    - In the takeDamage method, use what you have just learned to reduce attackScoreArray to a single number.
    - Store that number in a const called totalAttackScore
    - Decrement the health score by totalAttackScore
8. Add code to takeDamage so that when the character reaches zero heath, they stay at zero health and don't drop below zero.
    - Add a line of code inside the body of the if statement in the takeDamage method which will give the character a new boolean "dead" when health reaches zero. It can be initialised with "true".
    - For now, log out that boolean when the character's health reaches zero.
    - Inside attack(), check if either character is dead.If they are, call a new function called endGame().
    - Set up the new function endGame() and have it log out "the game is over".
    - Inside endGame(), create a const called endMessage. 
    - Figure out how to set endMessage to say either "The Wizard Wins", "The Orc is Victorious", or "No victors - all creatures are dead", depending on the health scores of the characters.
    - Log out endMessage
9. endGame() part 2 - Create a second const in endGame called endEmoji
    - Figure out how to set it to hold the emoji "🔮" if the wizard wins, and "☠️" if the orc wins. If both characters are dead use "☠️".
    - Finally, take the html template string below render it to the screen so it replaces everything else when the game is over.
     `<div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}/h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>` 
    
10. Refactor code to arrow functions
11. Health bar Create a property called maxHealth INSIDE Character that 
stores the maximum health a character can have.
- Create an arrow function called getPercentage OUTSIDE Character which takes two parameters, remainingHealth and maximumHealth. getPercentage should return the % of maximumHealth that is remaining.
    - To test, call getPercentage from within the takeDamage method and log out the result. 
    - Set up a new method called getHealthBarHtml: Create a const called "percent" and set it equals to the returned value from our getPercentage function (think what arguments you want to pass in).
    - For now, just log out the value of the new const "percent".
    - Down in the getCharacterHtml method, set up a const called healthBar and set it equal to the returned value of the getHealthBarHtml method.
    - Instead of just logging the percent, getHealthBarHtml needs to return this string of html:
        `<div class="health-bar-outer">
            <div class="health-bar-inner *YOUR CODE HERE* " 
                style="width: *YOUR CODE HERE* %;">
            </div>
        </div>`
    - You need to make some changes to that string of HTML.
        - If the amount of health left is 25% or lower, add the class "danger" to the div with the class "health-bar-inner".
        - The width of that div should be the % health remaining. 
    - Be sure to add the healthBar variable to the string of HTML rendered by getCharacterHtml.
12. Move getPerecentage out of the Character file.
13. New Monsters: Create a function called getNewMonster.
    - Write logic inside the function that takes the first monster from monstersArray and extracts that monster's data from characterData.
    - Save that data to a new const called nextMonsterData.
    Make it so getNewMonster returns a new instance of Character. Think
what argument you should be passing. If there are no more monsters in the 
array, getNewMonster should return an empty object {}.
2. Down near the bottom of the file, set a new variable "monster" equal 
to our new function getNewMonster.
3. Delete any code we no longer need.
- The app will still be broken - don't worry for now!
- Change the attack function so that when a monster dies, 
the next monster replaces it. If there are no more monsters,
call endGame(). 
2. Make sure that endGame() still gets called if the wizard
is killed.