console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
// ANSWER - need to change the condition to 'i<6'.
console.log('count from 0 to 5');

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?

// ANSWER - need to change the initializer to 'i=4' and the condition to 'i<6'.
console.log('count from 3 to 5');

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
// ANSWER - need to change the initializer to 'i=2' and the condition
// to 'i<6' and the final-expression to 'i+=2'. Unsure about the condition should
// it be 'i<6' (final numbers will be 2-4-6-8-10 or 5 index spots) or 'i<11' (as initial
// numbers will be 0 through 10 with eleven index spots)? I think 'i<6' for conditional?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0

// ANSWER
// for (let i=6; i>=0; i--) {
//  console.log(i);
// }
console.log('STRETCH: countdown from 5 to 0');


// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array

// ANSWER - for (let i = 0; i < 6; i++) {
//   console.log(stars);
// }
console.log('Some stars:');


// 3. While loops  

console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array

// ANSWER
// let i = 0;
// 
// while (i<stars.length){
//   console.log(stars[i]);
//   i++;
// }
console.log('Some stars using while:');

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5

// ANSWER

// let i = 0;
// 
// while (i<6; ){
//   console.log(i);
//   i++;
// }
console.log('count from 0 to 5');

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
// ANSWER

// let i = 10;
// 
// while (i>=5; ){
//   console.log(i);
//   i--;
// }
console.log('count backwards from 10 to 5');
