console.log('****** Loops Practice *******');

console.log('---1 example start---');
// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}
console.log('---1 example finished---');

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
console.log('----My work of 1a start----');

for( let i=0; i<5; i++){
  console.log(i);
}


console.log('---My work of 1a finished---');


// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
console.log('----My work of 1b start----');

for( let i=3; i<5; i++){
  console.log(i);
}

console.log('----My work of 1b finished----');


// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
console.log('----My work of 1c start----');
for(let n=2; n<=10; n+= 2){
  //console.log(n);
  //if(n%2 == 0){
    console.log("%d/n",n);
  }//https://codeforwin.org/2015/06/c-program-to-print-all-even-numbers-between-1-to-100.html how i found the formula but it still print the odd numbers. 
//Im not sure it is showing n/n??
//}
  for(let n=2; n<=10; n=n+2){
    console.log('print all even numbers to ten', n);
  }
console.log('----My work of 1c finished----');



// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
console.log('----My work of 1d start----');

for(let n=5; n>=0; n--){
  console.log(n);
}

console.log('----My work of 1d finished----');

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
console.log('----My work of 2a start----');

for( fameous of stars){
  console.log('Some stars:', fameous);
}

console.log('----My work of 2a finished----');


// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
console.log('----My work of 3a start----');

console.log('Version 1');
console.log('some stars using while:', stars );{
  while( stars)
  stars++; 
}
console.log('vvversion 2vv');




/// DO NOT RUN WILL RUN INFINITY 

console.log('----My work of 3a finished----');



// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
console.log('----My work of 3b start----');

i=0;

while(i<=5){
  console.log('keep adding until i= 5', i);
  i++; 
}




console.log('----My work of 3b finished----');
// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

console.log('----My work of 3c start----');




let n = 10;

while( n >= 5){
  console.log(n);
  n--;
}

console.log('----My work of 3c finished----');
