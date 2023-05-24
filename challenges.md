# Challenges from the Scrimba site

1. Take the hard-coded HTML for the Wizard card, bring it into index.js and then inject it back into its div with JavaScript.
2. Do the same for Orc card. 
3. Strip out the hero and monster data (element id, name, avatar, health and dice score) and store them in variables
    - Write a renderCharacter() function that accepts the 5 new variables as paramaters and renders out a character with this data
    - Call renderCharacter() twice. Once with the hero variables and once with the monster variables to that both are rendered
4. Update the renderCharacter() function so that it accepts a single object "data" as its parameter instead of five string/numbers, reducing the number of arguments to pass in from five to one.
    - Update the template now each variable is coming from "data"
    - Update the function call.
5. Deconstruct the object
