/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
let hasWeapon = false;
let survive = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

if (choice === "mountains" && hasTorch) {
    console.log("You encounter a mysterious cabin in the mountains. ");
    const followUpChoice = readline.question("Do you explore the mysterious cabin? (yes/no) ");
    if (followUpChoice === "yes") {
        console.log("You enter the cabin and discover an old journal and an old greatsword. ");
        hasWeapon = true;
        console.log("You continue along the trail. ")
    } else {
        console.log("You decide it's not safe to enter. You continue along the trail. ");
 }
}

if (choice === "village" || hasMap) {
    console.log("The village is empty. You find traces of people and a freshly put out fire.");
    const followUpChoice = readline.question("Do you explore the 'village' further, or go back to the 'paths'? ");

    if (followUpChoice === "village") {
        console.log("You explore the village and find a hidden basement.");
        const exploreBasement = readline.question("Do you want to explore the hidden basement? (yes/no) ");

        if (exploreBasement === "yes") {
            console.log("You find a sledgehammer and a map! ");
            hasWeapon = true;
        } else {
            console.log("You decide not to, and keep exploring the village. ");
        }
        
    } else {
        console.log("You head back to the fork in the path.")
    }

}

if (choice === "mountains" || choice === "village") {
    console.log("After exploring, you find that both the paths led back together. ");
    console.log("You see what looks like to be an exit, you sprint to it. ");
    const decision = readline.question("The exit is right there, but you see a wolf guarding it! Do you 'fight' the wolf, or try and 'run' for the exit? ");
        if (decision === "fight") {
            if (hasWeapon) {
                console.log("You successfully defeat the wolf and take the exit. ");
                survive = true;
            } else {
                console.log("You try and fight the wolf with your bare hands, but it was too strong. You died.");
            } 
        } else if (decision === "run") {
            if (hasWeapon) {
                console.log("You try to run away, but your weapon weighs you down. The wolf growls closer and your back is turned. You died. ");
            } else {
                console.log("You were able to outrun the wolf and make it to the exit")
                survive = true;
            }
            }
            
           

        }
    
if (survive) {
    console.log("Congratulations you survived and were able to escape!!! ")
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
