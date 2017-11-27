/*Paste the code below into your HTML file.*/

/* take the contents of the sonnet div and place it in a variable.*/

let sonnet = document.getElementById('sonnet');
let sonnetText = sonnet.innerHTML;
console.log("Sonnet Variable", sonnetText);

/* Find and output the starting position of the word "orphans".*/

let orphanText = sonnetText.indexOf('orphan');
console.log("Starting position of Orphan", orphanText);

/* Output the number of characters in the sonnet. */

let sonnetCharac = sonnetText.length;
console.log("Sonnet Length", sonnetCharac);

/* Replace the first occurance of the string "winter" with "yuletide". */

let sonnetNew = sonnetText.replace('winter', 'yuletide');
console.log("Sonnet Replace Winter", sonnetNew);

/* Replace all occurances of the string "the" with "a large". */

sonnetNew = sonnetText.replace(/thee/g, 'a large');
console.log("Sonnet Replace Thee", sonnetNew);

/* Set the content of the sonnet div with the new string. */

sonnet.innerHTML = sonnetNew ;