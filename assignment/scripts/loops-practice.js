console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)

for (let i = 0; i < 4; i++) {
  console.log('count from 0 to 3:', i);
}
console.log('');

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
// ANSWER - need to change the condition to 'i<6'.

for (let i = 0; i < 6; i++) {
  console.log('count from 0 to 5:', i);
}
console.log('');


// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?

// ANSWER - need to change the initializer to 'i=4' and the condition to 'i<6'.

for (let i = 3; i < 6; i++) {
  console.log('count from 3 to 5:', i);
}
  console.log('');




// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
// ANSWER - need to change the initializer to 'i=2' and the condition
// to 'i<=10' and the final-expression to 'i+=2'. 

for (let i = 2; i <= 10; i += 2) {
  console.log('even numbers 2 thru 10:', i);
}
console.log('');

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0

// ANSWER
for (let i=5; i>=0; i--) {
  console.log('STRETCH - countdown from 5 to 0:', i);
 }
console.log('');



// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']



// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array

// ANSWER - for (let i = 0; i < stars.length; i++) {
//   console.log(stars[i]);
// }

for (let star of stars){
  console.log(star);
}
console.log('');



// 3. While loops  

console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array

//let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']



let i = 0;
 
while (i<stars.length){
   console.log('Some stars using while:', stars[i]);
   i++;
 }
console.log('');


// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5

// ANSWER


let x = 0;

while (x <= 5) {
  console.log('while count from 0 to 5:', x);
    x++;
}
console.log('');


// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
// ANSWER

let n = 10;
 
while (n>=5){
   console.log('count backwards from 10 to 5:', n);
     n--;
 }
